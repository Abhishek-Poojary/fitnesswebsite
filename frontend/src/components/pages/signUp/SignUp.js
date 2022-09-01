import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { userSignUpAction } from "../../../actions/UserAction";


const SignUp = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, SetName] = useState();

    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [nameError, setNameError] = useState();

    const [registerError, setRegisterError] = useState();
    const { error, loading, isAuthenticated } = useSelector(state => state.login);

    const navigate = useNavigate();

    const verifyEmail = (event) => {

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

    const verifyName = (event) => {

        let value = event.target.value;
        if (!value || value === "") {
            setNameError("User name is required");

        } else if (value.length < 4) {
            setNameError("User Name should be greater than 3 words");

        } else {
            setNameError("");
            SetName(value);
        }

    }

    const createUser = (e) => {
        e.preventDefault();
        if (!email || email === "" || emailError || !password || password === "" || passwordError || !name || name === "" || nameError) {
            if (!email || email === "" || emailError) {
                setEmailError("Please enter valid EmailId");
            }
            if (!password || password === "" || passwordError) {
                setPasswordError("Enter Valid Password");
            }

            if (!name || name === "" || nameError) {
                setNameError("Enter a User Name ")
            }
        }
        else {
            dispatch(userSignUpAction(email, name, password));
            navigate('/login')
        }
    }


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
        if (email && email !== "" && error) {
            setRegisterError("Not able to register User at this Moment")
        }

    }, [dispatch, error, isAuthenticated, loading]);


    return (
        <Fragment>
            <div className="pt-5">
                <div className="global-container">
                    <div className="card login-form">
                        <div className="card-body">
                            <div className="card-text">
                                <form onSubmit={(e) => createUser(e)}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail" className="form-label">Email address </label>
                                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail" onChange={(e) => verifyEmail(e)} placeholder="Enter Email" />
                                        <span className="text-danger">{emailError}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName" className="form-label">User Name </label>
                                        <input type="name" className="form-control form-control-lg" id="exampleInputName" onChange={(e) => verifyName(e)} placeholder="Enter Name" />
                                        <span className="text-danger">{nameError}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword" className="form-label">Password </label>
                                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword" onChange={(e) => verifyPassword(e)} placeholder="Enter Password" />
                                        <span className="text-danger">{passwordError}</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block custom-btn-1"> Sign Up </button>
                                    <span className="text-danger">{registerError}</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default SignUp;