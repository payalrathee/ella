import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import {popupReducer, errorReducer} from "./utility/utilityReducer";
import productReducer from "./product/productReducer";

export const rootReducer = combineReducers(
    {
        user: userReducer,
        product: productReducer,
        popup: popupReducer,
        error: errorReducer
    }
)