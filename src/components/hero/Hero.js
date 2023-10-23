import  React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Hero ({Movies}){

    const navigate=useNavigate();
    return(
        <div className='movie-carousel-container'>
        <Carousel swipe={true} animation="slide" duration ={700}
        navButtonsProps={{      
            style: {
                backgroundColor: 'black',
            }
        }} 
        >
          {
              Object.values(Movies).map((movie)=>{
                  return(
                      <Paper>
                    <div className='movie-card-container'>       
                    <div className='movie-card' style = {{"--img": `url(${movie.backdrops[0]})`}}>
                        <div className='movie-detail'>
                        <div className='movie-poster'>
                            <img src= {movie.poster} alt={movie.title}></img>
                            </div>
                             <div className='movie-title-card'>{movie.title} </div>
                            <div className='trailer-button'>    
                            <Link to ={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                            <FontAwesomeIcon  className='play-button-icon' icon={faPlayCircle} beat ></FontAwesomeIcon>
                            </Link>
                            </div>
                            <div className='review-container'>
                            <Button className='review-button' variant="outline-light" onClick={()=>{navigate(`/Reviews/${movie.imdbId}`)}} >
                                 Write a Review</Button>
                            </div>
                    </div>
                        </div>
                    </div>
                </Paper>
                )
            })
        }
        </Carousel>
        </div>
    )
};

export default Hero;