import axios from "axios";
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
    REQUEST_TO_GET_EVENT_DETAIl,REQUEST_TO_GET_EVENT_DETAIl_FAIL,REQUEST_TO_GET_EVENT_DETAIl_SUCCESS,
    REQUEST_TO_REGISTER_USER_FOR_EVENT,REQUEST_TO_REGISTER_USER_FOR_EVENT_FAIL,REQUEST_TO_REGISTER_USER_FOR_EVENT_SUCCESS
} from '../constants/UserConstants'


export const userLoginAction = (email, password) => (dispatch, getState) => {

    dispatch({ type: REQUEST_FOR_USER_LOGIN });

    var userData = {
        email, password
    }

    axios.post("http://localhost:4000/api/v1/login", userData).then((result) => {
        dispatch({ type: REQUEST_FOR_USER_LOGIN_SUCCESS, payload: result.data.name });
        localStorage.setItem("loginState", JSON.stringify(getState().login))
    }).catch((error) => {
        dispatch({ type: REQUEST_FOR_USER_LOGIN_FAIL, error: error.response.data.error });
    })


}


export const userSignUpAction = (email, name, password) => (dispatch, getState) => {
    dispatch({ type: REQUEST_TO_REGISTER_USER })

    let data = {
        email,
        name,
        password
    }

    axios.post('http://localhost:4000/api/v1/register', data)
        .then((res) => {
            dispatch({ type: REQUEST_TO_REGISTER_USER_SUCCESS, payload: res.data.name })
            localStorage.setItem("loginState", JSON.stringify(getState().login))
        })
        .catch((err) => {
            dispatch({ type: REQUEST_FOR_USER_LOGIN_FAIL, error: err.response.data.error });
        })
}


export const logoutUser = () => (dispatch) => {

    localStorage.removeItem("loginState");

    dispatch({ type: REQUEST_TO_LOGOUT_USER_SUCCESS })
}

export const getUserDetails = (user) => (dispatch, getState) => {
    dispatch({ type: REQUEST_TO_LOAD_USER_DETAILS })
    axios.get("http://localhost:4000/api/v1/user/" + user).then((result) => {
        dispatch({ type: REQUEST_TO_LOAD_USER_DETAILS_SUCCESS, payload: result.data.user[0] });

    }).catch((error) => {
        dispatch({ type: REQUEST_FOR_USER_LOGIN_FAIL, error: error.response.data.error });
    })
}



export const updateEventDate = (name,date) => (dispatch) => {
    let obj = {
        name,date
    }
    dispatch({ type: REQUEST_TO_UPDATE_EVENT_DATE })

    axios.put("http://localhost:4000/api/v1/event/update", obj).then((result) => {

        console.log(result)
        dispatch({ type: REQUEST_TO_UPDATE_EVENT_DATE_SUCCESS, payload: result.data.message });

    }).catch((err) => {
        dispatch({ type: REQUEST_TO_UPDATE_EVENT_DATE_FAIL, error: err });
    })
}

export const getEventDate = (name) => (dispatch) => {

    dispatch({ type: REQUEST_TO_GET_EVENT_DATE })

    axios.get("http://localhost:4000/api/v1/event/date?name="+name).then((result) => {
        dispatch({ type: REQUEST_TO_GET_EVENT_DATE_SUCCESS, payload: result.data.date });
    }).catch((err) => {
        dispatch({ type: REQUEST_TO_GET_EVENT_DATE_FAIL, error: err });
    })
}


export const getAllClasses = () => (dispatch) => {
    dispatch({ type: REQUEST_TO_GET_ALL_CLASS })

    axios.get("http://localhost:4000/api/v1/event/all").then((result) => {
        dispatch({ type: REQUEST_TO_GET_ALL_CLASS_SUCCESS, payload: result.data });

    }).catch((error) => {
        dispatch({ type: REQUEST_TO_GET_ALL_CLASS_FAIL, payload: error });
    })
}

export const getClassDetails = (name) => (dispatch) => {
    dispatch({ type: REQUEST_TO_GET_EVENT_DETAIl })

    axios.get("http://localhost:4000/api/v1/event/"+name).then((result) => {
        dispatch({ type: REQUEST_TO_GET_EVENT_DETAIl_SUCCESS, payload: result.data });

    }).catch((error) => {
        dispatch({ type: REQUEST_TO_GET_EVENT_DETAIl_FAIL, payload: error });
    })
}


export const registerUserForEvent = (name,username) => (dispatch) => {
    let data={
        user:username,name
    }
    dispatch({ type: REQUEST_TO_REGISTER_USER_FOR_EVENT })
    console.group(username)
    axios.put("http://localhost:4000/api/v1/user/event/register",data).then((result) => {
        dispatch({ type: REQUEST_TO_REGISTER_USER_FOR_EVENT_SUCCESS, payload: result.data });

    }).catch((error) => {
        dispatch({ type: REQUEST_TO_REGISTER_USER_FOR_EVENT_FAIL, payload: error });
    })
}
