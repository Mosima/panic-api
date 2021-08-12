import {combineReducers} from 'redux'

import admin from './component/admin/reducer'
import user from './component/user/reducer'

 const appReducer = combineReducers({
    admin,
    user
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer