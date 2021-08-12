import axios from "axios";
import * as types from './types'


export const setPanic = (val) =>{
    return (dispatch, getState) => {
      let user = getState().user.userPanic
        axios.post('/panic', {
            val
          })
          .then(function (response) {
            user.push(response.data[0])
            dispatch({
              type: types.SET_PANIC,
              payload: user
      })
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
