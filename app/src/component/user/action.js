import axios from "axios";
import * as types from './types'


export const setPanic = (val) =>{
    return (dispatch, getState) => {
        let user = getState().user.userPanic

        user.push(val)
        dispatch({
                type: types.SET_PANIC,
                payload: user
        })
    }
}


