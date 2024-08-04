import { CLOSE_POPUP, OPEN_POPUP, RESET_FIELD_ERRORS, SET_FIELD_ERRORS } from "./actionTypes"

export function openPopup () {
    return {
        type: OPEN_POPUP
    }
}

export function closePopup () {
    return {
        type: CLOSE_POPUP,
        payload: false
    }
}

export function setFieldErrors(errors) {
    return {
        type: SET_FIELD_ERRORS,
        payload: errors
    }
}

export function resetFieldErrors() {
    return {
        type: RESET_FIELD_ERRORS,
        payload: {}
    }
}