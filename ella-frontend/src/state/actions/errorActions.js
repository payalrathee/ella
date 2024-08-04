import { RESET_ERROR, SET_ERROR } from "./actionTypes"

export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error
    }
}

export function resetError() {
    return {
        type: RESET_ERROR,
        payload: {}
    }
}