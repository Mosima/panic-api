import * as types from './types'
import * as props from './props'

export default (state = props, action) => {
    switch (action.type){
        case types.GET_DIVISIONS:
            return{
                ...state,
                [action.payload.prop]: action.payload.data
            }
        case types.GET_PANIC:
            return {
                ...state,
                panic: action.payload
            }
        default:
            return{
                ...state
            }
    }
}