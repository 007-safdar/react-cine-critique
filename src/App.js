import React, { useState, useEffect } from 'react';
import {  useNavigate ,Route , Routes} from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import './App.css';
import api from './api/axiosConfig';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './auth/LoginWidget';
import AboutUs from './components/about-us/AboutUs';
import Product from './pages/products';




const oktaAuth =  new OktaAuth(oktaConfig);
function App() {
  

  const [movies, setMovies] = useState('');
  const [movie, setMovie] = useState('');
  const [review, setReview] = useState('');

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
      console.log(response.data);
    }
    catch (err) {
      console.log(err);
    }
  };
  //To refer again
  const getMovieDataByImdbId = async (imdbId) => {
    try {
      const response = await api.get(`/api/v1/movies/${imdbId}`);
      const movieData = response.data;
      setMovie(movieData); // alwasy get res.data from axios

      const reviewData = movieData.reviewIds;
      setReview(reviewData);
      console.log(reviewData);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const navigate = useNavigate();

  const customAuthHandler = () => {
    navigate('/login');
  }
 
  const restoreOriginalUri = async (_oktaAuth,  originalUri) => {
    navigate(toRelativeUrl(originalUri || '/home', window.location.origin));
  };


  // How to add paths as an object 
  //const router=createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       { path: '/home', element: <Home movies={movies} /> },
  //       { path: '/Trailer/:ytTrailerId', element: <Trailer /> },
  //       { path: '/Reviews/:imdbId', element: <Reviews getMovieData={getMovieDataByImdbId} movie={movie} reviews={review} setReviews={setReview} /> },
  //       {path: '/login' , element: <LoginWidget config={oktaConfig}/>},
  //       {path:'/login/callback', element: <LoginCallback/>}
  //     ]
  //   },
  //   {
  //     path: '/Product', element: <Product />
  //   }
  // ]);
 
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler} >
        <div className="App">
          <Routes>
        
          <Route exact path="login" element={ <LoginWidget config={oktaConfig}/>}/>
          <Route exact path="login/callback" element={<LoginCallback/>}/>
              <Route exact path='/home' element ={<Home movies={movies}/>}/>
              <Route exact path= '/Trailer/:ytTrailerId' element = {<Trailer/>}></Route>,
               <Route exact path='/Reviews/:imdbId' element = {<Reviews getMovieData={getMovieDataByImdbId} movie={movie} reviews={review} setReviews={setReview}/>}></Route>
               <Route exact path='/watchlist' element ={<Product/>}/>
               <Route exact path='/' element ={<Layout/>}>
              </Route>
              <Route exact path='About-Us' element ={<AboutUs/>}></Route>
             
    </Routes>
        </div>
    </Security>
  );
}

export default App;
