import axios from "axios";
import { LOGOUT_USER, SET_USER } from "../user/userActionTypes";
import { closePopup, resetFieldErrors, setFieldErrors, resetError, setError } from "../utility/utilityActions";
import axiosInstance from "../../axiosInstance";

export function setUser(user) {

    return {
        type: SET_USER,
        payload: user
    };

}

export function logoutUser() {

    localStorage.removeItem("token");
    return {
        type: LOGOUT_USER,
        payload: {}
    }

}

export function signupUser(user) {
    return async(dispatch) => {
        dispatch(resetError());
        dispatch(resetFieldErrors());
        try {

            const response = await axios.post("http://localhost:8080/user/register", user);
            localStorage.setItem('token', response.data.token);
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
            localStorage.setItem('token', response.data.token);
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

export function init() {
    return async(dispatch) => {
       
        try {

            const response = await axiosInstance.get("/api/v1/");
            dispatch(setUser(response.data.user));

        } catch (error) {
            console.log("Error: ", error)
        }
    }
}