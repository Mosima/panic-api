
import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Button} from '@material-ui/core';

import * as actions from './action'

function User(props) {
    const handleClick = (e, user, lat, lon) =>{
        e.preventDefault();
        user = {
            user: user,
            latitude: lat,
            long: lon
        }
        props.actions.setPanic(user)
    }
    return (
        <div className="user">
            <br />
            <Button onClick={(e)=> handleClick(e, 'User 1', -25.325485125,  28.07)} variant="contained">
                User 1
            </Button>
            <br /><br />
            <Button onClick={(e)=> handleClick(e, 'User 2', -25.65558455255,  28.07)} variant="contained" color="primary">
                User 2
            </Button>
            <br /><br />
            <Button onClick={(e)=> handleClick(e, 'User 3', -25.01224555755,  28.07)} variant="contained" color="secondary">
                User 3
            </Button>
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

export default connect(mapStateToProps, mapDispatchToprops)(User);
