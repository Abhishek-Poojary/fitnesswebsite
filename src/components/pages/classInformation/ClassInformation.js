import React, { Fragment, useEffect, useState } from "react";
import './ClassInformation.css';
import axios from "axios";
import {useParams} from 'react-router-dom'


const ClassInformation = () => {
  const [data, setData] = useState("");


  const params= useParams();


  useEffect(() => {
    axios.get("http://localhost:4000/classes/"+params.id).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log("error")
    })
  }, [])

  return (
    <Fragment>
      <div className="container custom-container-1">
        <h1>{data.name}</h1>
        <span className="custom-style-date"> 27-08-2022 September</span>
        <span className="pt-4 mb-4">{data.description}</span>
        <span className="custom-style-place">29 places left</span>
        <span className="custom-style-place">from 64</span>
        <button className="btn btn-primary">book a place</button>
      </div>

      
    </Fragment>

  );
}


export default ClassInformation;