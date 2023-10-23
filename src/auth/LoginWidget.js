import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import './signinwidget.css';
import { useNavigate } from "react-router-dom";
import SignInWidget from "./signinwidget";
import LoadingSpinner from "../components/spinner/LoadingSpinner";


//config is passed as prop
const LoginWidget=({config})=>{

    const navigate=useNavigate();
const {oktaAuth , authState} = useOktaAuth();
/*
useOktaAuth hook gives oktaAuth object and authState obj. authState object has 
isAuthenticated value which says if user is authenticated or not
Stores passed in tokens or tokens from redirect url into storage, then redirect users back to the page inside the app. When using PKCE authorization code flow, this method also exchanges authorization code for tokens. By default it calls window.location.replace for the redirection.
Read more here https://github.com/okta/okta-auth-js#handleloginredirecttokens-originaluri
*/

// Here we need to define what happens on success
const onSuccess=(tokens)=>{
    oktaAuth.handleLoginRedirect(tokens);
};

//For the error in logging in
const onError =(err)=>{
console.log("Error in authorization",err);
};
console.log(authState);

//If authState is not present we show loading 
if(!authState){
return (<LoadingSpinner/>)
}
// if authenticated we take them to the app else take them to sign in widget
return authState.isAuthenticated ? 
navigate('/home')
:
<SignInWidget config={config} onSuccess={onSuccess} onError={onError}/>
};

export default LoginWidget;