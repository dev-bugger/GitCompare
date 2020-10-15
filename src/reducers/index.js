import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import timelineReducer from "./timelineReducer";

export const rootReducer = combineReducers({
    userReducer,
    alertReducer,
    timelineReducer
});
