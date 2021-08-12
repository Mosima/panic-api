import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import * as actions from './action'



import icon from '../../assets/img/panic.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


L.Icon.Default.imagePath = '../../assets/img';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

const markerIcon = new L.Icon({
    iconUrl: require("../../assets/img/panic.png").default,
    iconSize: [100, 100]
})

L.Marker.prototype.options.icon = DefaultIcon;


const center = [-25.9928, 28.07]

const fillBlueOptions = { fillColor: 'blue' }
const redOptions = { color: 'red' }

function Division(props) {
    useEffect(() => {
        props.actions.getDivisions()
    }, []);

    console.log(props.state.admin.division)
    const { division } = props.state.admin
    const { userPanic } = props.state.user
    return (
        <div className="division">
            {
                division ?
                    <MapContainer center={[-25.9928, 28.07]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            userPanic ? userPanic.map((user, index) => {
                                L.marker([user.latitude,  user.latitude]).addTo(MapContainer);

                            return <Marker key={index} position={[user.latitude,  user.latitude]} icon={markerIcon}>
                                <Popup>
                                    <h3>{user}</h3>
                                    A Client is in need of Help. <br /> HELP ME!!!<br />
                                    Client location:  {`${user.latitude}, ${user.latitude}`}<br />
                                    <h2>Nearest Division: Midrand</h2>
                                </Popup>
                            </Marker>
                            }
                            ) : ''
                        }

                        {
                            division ? division.map((div, ind) => <Circle key={ind} center={[div.latitude, div.longitude]} pathOptions={fillBlueOptions} radius={600} />)
                                : ''
                        }
                        {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} /> */}
                        {/* <CircleMarker center={[ -25.9928, 28.07]} pathOptions={redOptions} radius={15}>
                    <Popup>Popup in CircleMarker</Popup>
                </CircleMarker> */}
                    </MapContainer>
                    : <MapContainer center={[-25.9928, 28.07]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                    </MapContainer>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state: {
            ...state
        }
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Division);