import React from 'react';
import { Outlet, useLocation} from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useOktaAuth } from '@okta/okta-react';
import LandingPage from './LandingPage';
import LoadingSpinner from '../components/spinner/LoadingSpinner';

function Layout () {
    const loc= useLocation();
    const {authState } = useOktaAuth();

    if (!authState) {
        return <LoadingSpinner />;
    }
    
return(
    <>
    <Header/>
    
    <div>
        {!authState.isAuthenticated && loc.pathname !=='/login' ?
        <div>
         <LandingPage/>
         <Footer/>
         </div>
        :
        <div>
    <Outlet/>
    <Footer/>
    </div>  
}

    </div>
    </>
)
  
};

export default Layout;