import React, { Fragment, useEffect, useState } from "react";
import './Classes.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllClasses } from "../../../actions/UserAction";

const Classes = ({ changeBackground }) => {
  const [data, setData] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {loading,classes}=useSelector(state=>state.classes);
  const navigateUser=(name)=>{
      navigate('/class?name='+name)
      navigate(0);
  }


  useEffect(() => {
    changeBackground("./images/classes_background.jpg");

  })
  useEffect(() => {
    dispatch(getAllClasses());
  }, [])
  return (
    <Fragment>
      <div className="container-fluid text-center custom-position-class">
        <h1>Classes Available</h1>
        <span>Group Fitness Classes</span>
      </div>
      <div className="custom-class-container">
        {loading===false && classes.map((item,index) => {
          return (
            <div className="custom-class-inner-container" key={index}>
              <div className="custom-class-title-name">
                  <span >{item.name}</span>
              </div>
              <div>
                <p className="class-description">{item.description}</p>
                <span className="navigate-user" onClick={()=>navigateUser(item.name)}>Book</span>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>

  );
}


export default Classes;