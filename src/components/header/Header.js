import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
//import { faVideo } from "@fortawesome/free-solid-svg-icons";
//import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import './header.css';
import LoadingSpinner from "../spinner/LoadingSpinner";
function Header() {

    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) {
        return <LoadingSpinner />;
    }
    const navigate = useNavigate();
    const handleLogout = async () => {
        oktaAuth.signOut();
        navigate('/');
    }
   
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="Navbar">
            <Container fluid>
                <Navbar.Brand href="/home" style={{ "color": "gold" }}>
                    <FontAwesomeIcon icon={faVideoSlash}></FontAwesomeIcon>
                    Cine Critique
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <div>
                    {authState.isAuthenticated && <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/watchlist">Watchlist</Nav.Link>
                    </Nav>} 
                    </div>
                    <div >
                        {!authState.isAuthenticated ?
                            <Button variant="dark" onClick={() => { navigate('/login') }}>Login</Button>
                            :
                            <Button variant="dark" onClick={handleLogout}>Log out</Button>
                        }
                        <Button variant="dark" onClick={() => { navigate('/About-Us') }}><span>About Us</span></Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;