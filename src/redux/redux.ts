import {combineReducers,  legacy_createStore as createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    users: usersReducer
})

let reduxStore = createStore(reducers)

export default reduxStore