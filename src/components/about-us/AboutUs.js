import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './AboutUs.css';
const AboutUs =()=>{
return (
    <> 
    <Header/>
 <title> An About Us Page | CoderGirl </title>
  <link rel="stylesheet" href="style.css"></link>
<body>
  <section className="about-us">
    <div className="about">
      <img src="https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=1024x1024&w=is&k=20&c=-_9Bhlpm_k7Ehpm3mbJLMcYNbDQuLQsizLDOY5hbpcs=" class="pic" alt="test"></img>
      <div className="text">
        <h2>About Me</h2>
        <h5>Hey, I'm Safdar I'm a <span className="Dev">Developer</span></h5>
          <p>Details to reach out to me are attached in the footer below, please feel free to reach out ! Thanks for visiting :)</p>
          <p> </p>
        <div className="data">
        </div>
      </div>
    </div>
    <Footer/>
  </section>
</body>
<div/>
</>
)};

export default AboutUs;
