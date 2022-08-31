import {
    REQUEST_FOR_USER_LOGIN,
    REQUEST_FOR_USER_LOGIN_FAIL,
    REQUEST_FOR_USER_LOGIN_SUCCESS,
    REQUEST_TO_REGISTER_USER,
    REQUEST_TO_REGISTER_USER_FAIL,
    REQUEST_TO_REGISTER_USER_SUCCESS,
    REQUEST_TO_LOGOUT_USER_SUCCESS,
    REQUEST_TO_LOAD_USER_DETAILS,
    REQUEST_TO_LOAD_USER_DETAILS_FAIL,
    REQUEST_TO_LOAD_USER_DETAILS_SUCCESS,
    REQUEST_TO_UPDATE_EVENT_DATE,
    REQUEST_TO_UPDATE_EVENT_DATE_FAIL, REQUEST_TO_UPDATE_EVENT_DATE_SUCCESS,
    REQUEST_TO_GET_EVENT_DATE,
    REQUEST_TO_GET_EVENT_DATE_FAIL, REQUEST_TO_GET_EVENT_DATE_SUCCESS,
    REQUEST_TO_GET_ALL_CLASS, REQUEST_TO_GET_ALL_CLASS_FAIL, REQUEST_TO_GET_ALL_CLASS_SUCCESS,
    REQUEST_TO_GET_EVENT_DETAIl, REQUEST_TO_GET_EVENT_DETAIl_FAIL, REQUEST_TO_GET_EVENT_DETAIl_SUCCESS,
    REQUEST_TO_REGISTER_USER_FOR_EVENT, REQUEST_TO_REGISTER_USER_FOR_EVENT_FAIL, REQUEST_TO_REGISTER_USER_FOR_EVENT_SUCCESS
} from '../constants/UserConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_TO_REGISTER_USER:
        case REQUEST_FOR_USER_LOGIN:
            return {
                loading: true,
                isAuthenticated: false
            }
        case REQUEST_TO_REGISTER_USER_FAIL:
        case REQUEST_FOR_USER_LOGIN_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.error
            }
        case REQUEST_TO_REGISTER_USER_SUCCESS:
        case REQUEST_FOR_USER_LOGIN_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case REQUEST_TO_LOGOUT_USER_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }
        default: return state;
    }

}

export const loadUserReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_TO_LOAD_USER_DETAILS:
            return {
                loading: true
            }
        case REQUEST_TO_LOAD_USER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.error
            }
        case REQUEST_TO_LOAD_USER_DETAILS_SUCCESS:
            return {
                loading: false,
                userRole: action.payload.role,
                registeredClass: action.payload.history
            }
        default: return state
    }
}


export const adminUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_TO_UPDATE_EVENT_DATE:
            return {
                loading: true
            }
        case REQUEST_TO_UPDATE_EVENT_DATE_FAIL:
            return {
                loading: false,
                error: action.error
            }
        case REQUEST_TO_UPDATE_EVENT_DATE_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        default: return state
    }
}


export const eventDateReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_TO_REGISTER_USER_FOR_EVENT:
        case REQUEST_TO_GET_EVENT_DATE:
            return {
                loading: true
            }
        case REQUEST_TO_REGISTER_USER_FOR_EVENT_FAIL:
        case REQUEST_TO_GET_EVENT_DATE_FAIL:
            return {
                loading: false,
                error: action.error
            }

        case REQUEST_TO_GET_EVENT_DATE_SUCCESS:
            return {
                loading: false,
                date: action.payload
            }
        case REQUEST_TO_REGISTER_USER_FOR_EVENT_SUCCESS:
            return {
                loading: false,
                message:action.payload.message
            }
        default: return state
    }
}


export const classDetailReducer = (state = {}, action) => {

    switch (action.type) {
        case REQUEST_TO_GET_EVENT_DETAIl:
        case REQUEST_TO_GET_ALL_CLASS:
            return {
                loading: true,
            }
        case REQUEST_TO_GET_EVENT_DETAIl_FAIL:
        case REQUEST_TO_GET_ALL_CLASS_FAIL:
            return {
                loading: false,
                error: action.error
            }
        case REQUEST_TO_GET_EVENT_DETAIl_SUCCESS:
        case REQUEST_TO_GET_ALL_CLASS_SUCCESS:
            return {
                loading: false,
                classes: action.payload.data
            }
        default: return state
    }
}