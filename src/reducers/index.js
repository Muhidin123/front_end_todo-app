import { combineReducers } from "redux";
import loginReducer from "./login";

export default combineReducers({
    currentUser: loginReducer,
});
