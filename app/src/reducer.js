import {combineReducers} from 'redux'

import adminReducer from './component/admin/reducer'

 const appReducer = combineReducers({
    adminReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer