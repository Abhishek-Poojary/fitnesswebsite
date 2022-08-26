import React, { Fragment, useEffect, useState } from "react";
import './Classes.css';
import axios from "axios";

const Classes = ({ changeBackground }) => {
  const [data, setData] = useState("");

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
              <div>
                  <span className="custom-class-header">{item.name}</span>
              </div>
              <div>
                <p>{item.description}</p>
                <span>Read More</span>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>

  );
}


export default Classes;