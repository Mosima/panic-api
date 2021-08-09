import React, {useState, useEffect} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'

function Division(props) {
    useEffect(() => {
        props.actions.getDivisions()
    }, []);

    console.log(props)
    return (
        <div className="division">
            Division
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        state:{
            ...state
        }
    }
}

const mapDispatchToprops = (dispatch) =>{
    return{
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToprops )(Division);