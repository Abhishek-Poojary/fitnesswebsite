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
    REQUEST_TO_LOAD_USER_DETAILS_SUCCESS    
} from '../constants/UserConstants'


export const userLoginAction = (email, password) => (dispatch, getState) => {

    dispatch({ type: REQUEST_FOR_USER_LOGIN });

    var userData

    axios.get("http://localhost:4000/users").then((result) => {


        console.log(result)
        let res = result.data.find((data) => data.email === email && data.password === password)
        console.log(res)

        if (res.length == 0)
            dispatch({ type: REQUEST_FOR_USER_LOGIN_FAIL, error: "Please confirm your emailId and Password" });
        else {
            dispatch({ type: REQUEST_FOR_USER_LOGIN_SUCCESS, payload: res.name });
            localStorage.setItem("loginState", JSON.stringify(getState().login))
        }

    }).catch((err) => {
        dispatch({ type: REQUEST_FOR_USER_LOGIN_FAIL, error: "no Users present" });
    })


}


export const userSignUpAction = (email, name, password) => (dispatch, getState) => {
    dispatch({ type: REQUEST_TO_REGISTER_USER })

    let data = {
        email,
        name,
        password,
        role: "user"
    }

    axios.post('http://localhost:4000/users', data)
        .then(() => {
            dispatch({ type: REQUEST_TO_REGISTER_USER_SUCCESS, payload: name })
            localStorage.setItem("loginState", JSON.stringify(getState().login))
        })
        .catch((err) => {
            dispatch({ type: REQUEST_TO_REGISTER_USER_FAIL, error: err })
        })
}


export const logoutUser = () => (dispatch) => {

    localStorage.removeItem("loginState");

    dispatch({ type: REQUEST_TO_LOGOUT_USER_SUCCESS })
}

export const getUserDetails = (user) => (dispatch,getState) => {
    dispatch({type:    REQUEST_TO_LOAD_USER_DETAILS    })
    axios.get("http://localhost:4000/users?name="+user).then((result) => {
        console.log(result.data)
        dispatch({ type: REQUEST_TO_LOAD_USER_DETAILS_SUCCESS, payload: result.data[0] });
    
    }).catch((err) => {
        dispatch({ type: REQUEST_TO_LOAD_USER_DETAILS_FAIL, error: "User not present" });
    })
}