//1) combine reducers
import authReducer from './authReducer'
import projectReducer from './projectReducer'

//get combineReducers
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer