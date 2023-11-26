import {combineReducers,  legacy_createStore as createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

let reduxStore = createStore(reducers)

export default reduxStore