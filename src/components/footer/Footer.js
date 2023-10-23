import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer=()=>{
    return(
            <div className="footer-container">
                <div className="safdar-ahmed">
                    <span >Safdar Ahmed</span>
                    <a className="linkedin-icon" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/safdarahmed/'> 
                    <FontAwesomeIcon className="linkedin-icon-link" icon={faLinkedin}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/007-safdar'>
                    <FontAwesomeIcon className="github-icon" icon={faGithub}/>
                    </a>
                </div>
                <div className="footer-right-container">
        <div className="footer-copyright">
            <FontAwesomeIcon className="footer-copyright-icon" icon={faCopyright} />
            <p> Copyright 2023</p>
        </div>
        <Link className="footer-link-contact-us">Contact Us</Link>
                 </div>
        </div>
        
    )
}

export default Footer;