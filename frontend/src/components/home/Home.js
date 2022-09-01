import React, { Fragment, useEffect } from "react";
import './Home.css';


const Home = ({ changeBackground }) => {

  useEffect(() => {
    changeBackground("./images/background1.jpg", "center", "cover");
  })
  return (
    <Fragment>
      <div className="container-fluid text-center custom-position-home" >
        <h1>Healthier and More Active way of Life</h1>
      </div>
    </Fragment>

  );
}


export default Home;