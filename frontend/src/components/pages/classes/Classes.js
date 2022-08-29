import React, { Fragment, useEffect, useState } from "react";
import './Classes.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Classes = ({ changeBackground }) => {
  const [data, setData] = useState("");
  const navigate=useNavigate();

  const navigateUser=(id)=>{
      navigate('/classes/'+id)
      navigate(0);
  }


  useEffect(() => {
    changeBackground("./images/classes_background.jpg");

  })
  useEffect(() => {
    axios.get("http://localhost:4000/classes").then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log("error")
    })
  }, [])
  return (
    <Fragment>
      <div className="container-fluid text-center custom-position-class">
        <h1>Classes Available</h1>
        <span>Group Fitness Classes</span>
      </div>
      <div className="custom-class-container">
        {data && data.map((item,index) => {
          return (
            <div className="custom-class-inner-container" key={index}>
              <div className="custom-class-title-name">
                  <span >{item.name}</span>
              </div>
              <div>
                <p className="class-description">{item.description}</p>
                <span className="navigate-user" onClick={()=>navigateUser(item.id)}>Book</span>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>

  );
}


export default Classes;