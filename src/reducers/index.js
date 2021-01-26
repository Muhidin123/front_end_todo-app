import { combineReducers } from "redux";
import loginReducer from "./login";
import notesReducer from "./notes";

export default combineReducers({
  currentUser: loginReducer,
  notes: notesReducer
});
