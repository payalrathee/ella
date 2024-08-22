import { RESET_ERROR, SET_ERROR, CLOSE_POPUP, OPEN_POPUP, RESET_FIELD_ERRORS, SET_FIELD_ERRORS} from "./utilityActionTypes";

const errorInitState = {
    msg: "",
    code: ""
}

export function errorReducer(state = errorInitState, action) {
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

const popupInitState = {
    open: false,
    fieldErrors: {}
}

export function popupReducer(state = popupInitState, action) {
    switch(action.type) {
        case OPEN_POPUP: 
            return {
                ...state,
                open: true,
                fieldErrors: {}
            }
        case CLOSE_POPUP:
            return {
                ...state,
                open: false,
                fieldErrors: {}
            }
        case SET_FIELD_ERRORS:
            return {
                ...state,
                fieldErrors: action.payload
            }
        case RESET_FIELD_ERRORS:
            return {
                ...state,
                fieldErrors: {}
            }
        default: 
            return state
    }
}