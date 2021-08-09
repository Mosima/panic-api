import axios from "axios";
import * as types from './types'


export const getPanic = (val) =>{
    return (dispatch, getState) => {
        dispatch({
                type: types.GET_PANIC,
                payload: val
        })
    }
}


export const getDivisions = () => {
    return (dispatch, getState) => {
        axios.get('/division').then((response) => {
            dispatch({
                type: types.GET_DIVISIONS,
                payload: {
                    data: response.data,
                    prop: 'division'
                }
            })

        });
    }
}

