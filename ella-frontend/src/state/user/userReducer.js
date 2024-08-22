import { LOGOUT_USER, SET_USER } from "../user/userActionTypes"

const initState = {
    userDetails: {},
    isLoggedIn: false
}

export default function userReducer (state = initState, action){
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                userDetails: action.payload,
                isLoggedIn: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                userDetails: {},
                isLoggedIn: false
            }
        default: 
            return state;
    }
}