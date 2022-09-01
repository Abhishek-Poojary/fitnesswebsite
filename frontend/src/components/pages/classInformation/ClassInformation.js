import React, { Fragment, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getClassDetails, registerUserForEvent } from "../../../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom'

const ClassInformation = ({ }) => {
  const [registered, setRegistered] = useState(false);

  const dispatch = useDispatch();
  const { loading, classes } = useSelector(state => state.classes);
  const { loading: loadingUserDetails, registeredClass } = useSelector(state => state.user);
  const { user } = useSelector(state => state.login);
  const { loading: registerUserLoading, message } = useSelector(state => state.event);

  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    dispatch(getClassDetails(searchParams.get('name')));

  }, [message])

  useEffect(() => {
    if (loadingUserDetails === false && loading === false) {
      console.log(classes.name, classes.date.split('T')[0])
      var sort = null;
      sort = registeredClass.find((item) => item.name === classes.name && item.date.split('T')[0] === classes.date.split('T')[0])
      console.log(sort)
      if (sort === null) {
        setRegistered(false);
      }
      else if (sort != undefined) {
        setRegistered(true);
      }

    }
  }, [message, loading, loadingUserDetails, registerUserLoading])

  const registerUser = () => {
    dispatch(registerUserForEvent(classes.name, user))
    window.location.reload()
  }

  return (
    <Fragment>
      {loading === false && (
        <div className="container custom-container-1">
          <h1>{classes.name}</h1>
          <span className="custom-style-date"> {classes.date.split("T")[0]}</span>
          <span className="pt-4 mb-4">{classes.description}</span>
          <span className="custom-style-place">{classes.intake - classes.taken} places left</span>
          <span className="custom-style-place">from {classes.intake}</span>
          {loadingUserDetails === false && (registered) ? (
            <p>User has registered </p>
          ) : (
            <button className="btn btn-primary custom-btn-1" onClick={() => registerUser()} disabled={classes.intake - classes.taken === 0 ? true : false}>Book a place</button>
          )}

        </div>
      )}

    </Fragment>

  );
}


export default ClassInformation;