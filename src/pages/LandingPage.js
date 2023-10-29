import React from "react";
import './LandingPage.css';
const LandingPage =()=>{
return (
    <div className="landing-page"> 
    <div className="video-container" >
    <div className="video-foreground">
        <iframe title='youtube-video' src ="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ&mute=1"></iframe>
        <h1 className="foreground-text">Welcome to <span style={{ "color": "gold" , "paddingLeft": "0.5rem" }}>Cine Critique</span></h1>
        <p className="foreground-text-subtitle">Platform to view and review movies
        <span className="foreground-text-subtitle-2">A full Stack React + Spring Boot Project</span>
        </p>
       

    </div>             
    </div>
    </div>
)
};

export default LandingPage;