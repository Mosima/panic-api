import * as types from './types'
import * as props from './props'

export default (state = props, action) => {
    switch (action.type){
        case types.SET_PANIC:
            return {
                ...state,
                userPanic: action.payload
            }
        default:
            return{
                ...state
            }
    }
}