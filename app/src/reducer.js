import {combineReducers} from 'redux'

import admin from './component/admin/reducer'

 const appReducer = combineReducers({
    admin
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer