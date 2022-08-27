import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import {useNavigate,Link}  from 'react-router-dom'
import {  userLoginAction } from "../../../actions/UserAction.js";


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState();
    const { error, loading, isAuthenticated } = useSelector(state => state.login);
    const verifyEmail = (event) => {
        setLoginError("")
        let eIdregex = /^[a-z]+[@][a-z]+\.[com]+$/;
        let value = event.target.value;
        if (!value || value === "") {
            setEmailError("Please enter your EmailId");

        } else if (!value.match(eIdregex)) {
            setEmailError("Please enter a valid Emailid");

        } else {
            setEmailError("");
            setEmail(value);
        }

    }
   
    const verifyPassword = (event) => {
        setLoginError("")
        let value = event.target.value;
        if (!value || value === "") {
            setPasswordError("Password required");

        } else if (value.length < 9) {
            setPasswordError("Password should be greater than 8 words");

        } else {
            setPasswordError("");
            setPassword(value);
        }

    }

    const loginUser = (e) => {
        e.preventDefault();
        if (!email || email === "" || emailError || !password || password === "" || passwordError) {
            if (!email || email === "" || emailError) {
                setEmailError("Please enter valid EmailId");
            }
            if (!password || password === "" || passwordError) {
                setPasswordError("Enter Valid Password");
            }
        }
        else {
            dispatch(userLoginAction(email, password))
        }


    }


    useEffect(() => {
        if (isAuthenticated) {
                navigate("/");
        }
        if (email && email !== "" && error) {
            setLoginError("Wrong Email or Password")
        }

    }, [dispatch, error, isAuthenticated,loading]);


    return (
        <Fragment>
            <div className="pt-5">
                <div className="global-container">
                    <div className="card login-form">
                        <div className="card-body">
                            <div className="card-text">
                                <form onSubmit={(e)=>loginUser(e)}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address </label>
                                        <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" onChange={(e)=>verifyEmail(e)}  placeholder="Enter Email"/>
                                        <span className="text-danger">{emailError}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password </label>  
                                        <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" onChange={(e)=>verifyPassword(e)} placeholder="Enter Password"/>
                                        <span className="text-danger">{passwordError}</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block"> Sign in </button>
                                    <span className="text-danger">{loginError}</span>
                                    <div className="sign-up">
                                        Don't have an account?<Link to="/signUp">Sign Up</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Login;