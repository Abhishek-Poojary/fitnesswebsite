import React, { Fragment} from "react";




const About = () => {

  return (
    <Fragment>
      <div className="container  text-center custom-container-1">
        <h1>About and Gallery</h1>
        <span className="custom-style-about-1">since 2022</span>
        <span className="pt-4 custom-style-about-2">
        Welcome to PlayFit where we organize once a month for people to come together and attend class. No Charges included. Just book a class and attend the class. So come and join this community of fitness geeks to better our lives and our community health.
        </span>

      </div>
        <div className="photo-gallery">
            <img   src="./images/background1.jpg" alt="galleryImage1"/>
            <img   src="./images/background1.jpg" alt="galleryImage1"/>
            <img   src="./images/background1.jpg" alt="galleryImage1"/>
            <img   src="./images/background1.jpg" alt="galleryImage1"/>
        </div>
      
    </Fragment>

  );
}


export default About;