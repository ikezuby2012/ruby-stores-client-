import {
    REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("data"));


// const initialState = user ? {
//     loggedIn: true,
//     loading: false,
//     user
// } : {    
//     loggedIn: false,
//     loading: true,
//     user: {}
// }

const initialState = {    
    loggedIn: false,
    loading: true,
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loggedIn: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        default:
            return state;
    }
}

export default userReducer;