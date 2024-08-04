import { RESET_ERROR, SET_ERROR } from "../actions/actionTypes";

const initState = {
    msg: "",
    code: ""
}

export default function errorReducer(state = initState, action) {
    switch(action.type) {
        case SET_ERROR: 
            return {
                ...state,
                msg: action.payload.msg,
                code: action.payload.code
            }
        case RESET_ERROR:
            return {
                ...state,
                msg: action.payload.msg,
                code: action.payload.code
            }
        default:
            return state;
    }
}