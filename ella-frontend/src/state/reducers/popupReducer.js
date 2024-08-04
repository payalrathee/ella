import { CLOSE_POPUP, OPEN_POPUP, RESET_FIELD_ERRORS, SET_FIELD_ERRORS } from "../actions/actionTypes";

const initState = {
    open: false,
    fieldErrors: {}
}

export default function popupReducer(state = initState, action) {
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