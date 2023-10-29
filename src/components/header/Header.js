import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
//import { faVideo } from "@fortawesome/free-solid-svg-icons";
//import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import LoadingSpinner from "../spinner/LoadingSpinner";
import './header.css';


function Header() {
    const location =useLocation();
    const navigate = useNavigate();
    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        return <LoadingSpinner />;
    }
    

    const handleLogout = async () => {
        oktaAuth.signOut();
        navigate('/');
    }

    

   
    return (
        <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand  href="/home">
            <FontAwesomeIcon  className="header-icon" icon={faVideoSlash}>
            
            </FontAwesomeIcon>{' '}
            <span className="header-icon">Cine Critique</span>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { authState.isAuthenticated &&
            <div className="header-left-buttons">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/watchlist">Watchlist</Nav.Link>
            </div>
}
          </Nav>
       
       <Nav id="header-right-buttons" className="me-auto">
            { !authState.isAuthenticated && location.pathname!== '/login'? 
            <Nav.Link href="/login">Login</Nav.Link>
            :
            location.pathname!== '/login' &&  <Nav.Link onClick ={handleLogout}>Log Out</Nav.Link>
}
           <Nav.Link href="/About-Us" className="Dev">About Us</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;