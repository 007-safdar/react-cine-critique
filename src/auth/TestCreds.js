import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import './TestCreds.css';
import LoadingSpinner from "../components/spinner/LoadingSpinner";
const TestCreds= ()=>{
    const { authState} = useOktaAuth();
    if(!authState) {
        return <LoadingSpinner/>
    }
    /*
    return (
        <div className="credentials-box">
        <p>test.user@email.com</p>
        <p>testuser1234!</p>
        </div>
    )*/
}

export default TestCreds;