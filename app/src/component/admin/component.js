import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'leaflet/dist/leaflet.css';

import * as actions from './action'

const center = [  51.505, -0.09]

const fillBlueOptions = { fillColor: 'blue' }
const redOptions = { color: 'red' }

function Division(props) {
    useEffect(() => {
        props.actions.getDivisions()
    }, []);

    console.log(props.state.admin.division)
    const {division} = props.state.admin
    return (
        <div className="division">
            {division?
                <MapContainer center={[  51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[  51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[  51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {
                    division? division.map((div, ind)=><Circle key={ind} center={[ div.lat,div.lon ]} pathOptions={fillBlueOptions} radius={2000} />)
                    :''
                }
                {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} /> */}
                <CircleMarker center={[  51.505, -0.09]} pathOptions={redOptions} radius={20}>
                    <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
            </MapContainer>
            :'loading map'
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