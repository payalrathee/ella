import { combineReducers } from "redux";
import userReducer from "./userReducer";
import popupReducer from "./popupReducer";
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        popup: popupReducer,
        error: errorReducer
    }
)