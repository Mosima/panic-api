
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
            lat: lat,
            long: lon
        }
        props.actions.setPanic(user)
    }
    const { userPanic } = props.state.user
    return (
        <div className="user">
            <br />
            <Button onClick={(e)=> handleClick(e, 'User 1',-25.937507537306182,	28.284686465451152 )} variant="contained">
                User 1
            </Button>
            Nearby Division : {userPanic.length > 0 && userPanic.filter(x => x.user == "User 1").length > 0?userPanic.filter(x => x.user == "User 1")[0].division:''}
            <br /><br />
            <Button onClick={(e)=> handleClick(e, 'User 2', -26.335587720777976,  27.290881843364712)} variant="contained" color="primary">
                User 2
            </Button>
            Nearby Division : {userPanic.length > 0 && userPanic.filter(x => x.user == "User 2").length > 0?userPanic.filter(x => x.user == "User 2")[0].division:''}
            <br /><br />
            <Button onClick={(e)=> handleClick(e, 'User 3', -25.698132823029784,  27.735656917321563)} variant="contained" color="secondary">
                User 3
            </Button>
            Nearby Division : {userPanic.length > 0 && userPanic.filter(x => x.user == "User 3").length > 0?userPanic.filter(x => x.user == "User 3")[0].division:''}
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
