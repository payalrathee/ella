import axios from "axios";
import { LOGOUT_USER, SET_USER } from "./actionTypes";
import { closePopup, resetFieldErrors, setFieldErrors } from "./popupActions";
import { resetError, setError } from "./errorActions";

export function setUser(user) {

    return {
        type: SET_USER,
        payload: user
    };

}

export function signupUser(user) {
    return async(dispatch) => {
        dispatch(resetError());
        dispatch(resetFieldErrors());
        try {

            const response = await axios.post("http://localhost:8080/user/register", user);
            dispatch(setUser(response.data.user));
            dispatch(closePopup());
        } catch(error) {
            if(error.response.status === 400 && error.response.data.fieldErrors) {
                dispatch(setFieldErrors(error.response.data.fieldErrors));
            } else {
                dispatch(setError({msg: error.response.data.message, code: error.response.status}));
            }
            console.log("Error during signup: ", error)
        }
    }
}

export function loginUser(user) {
    return async(dispatch) => {
        dispatch(resetError());
        dispatch(resetFieldErrors());
        try {

            const response = await axios.post("http://localhost:8080/login", user);
            dispatch(setUser(response.data.user));
            dispatch(closePopup());

        } catch (error) {
            if(error.response.status === 400 && error.response.data.fieldErrors) {
                dispatch(setFieldErrors(error.response.data.fieldErrors));
            } else {
                dispatch(setError({msg: error.response.data.message, code: error.response.status}));
            }
            console.log("Error during login: ", error)
        }
    }
}

export function logoutUser() {

    return {
        type: LOGOUT_USER,
        payload: {}
    }

}