import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import settingsReducer from "./reducers/settingsReducer";
import navigationReducer from "./reducers/navigationReducer";
import photoReducer from "./reducers/photoReducer";
import postReducer from "./reducers/postReducer";
import thunkMuddleWare from "redux-thunk"

let reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    photo: photoReducer,
    users: usersReducer,
    settings: settingsReducer,
    navigation: navigationReducer,
    post: postReducer
})

let reduxStore = createStore(reducers, applyMiddleware(thunkMuddleWare))

export default reduxStore