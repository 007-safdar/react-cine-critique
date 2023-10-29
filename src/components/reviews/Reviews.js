import React, { useEffect, useRef } from "react";
import '../reviewform/ReviewForm';
import ReviewForm from "../reviewform/ReviewForm";
import { useParams } from "react-router-dom";
import {Row, Col, Carousel} from 'react-bootstrap';
import api from '../../api/axiosConfig';
import './Reviews.css';

function Reviews({getMovieData ,movie, setReviews , reviews}){
    const refText = useRef();
    const params=useParams();
    const imdbId=params.imdbId;
    //Get the imdbId of the current movie poster and store it in movie state

    useEffect(()=>{
    getMovieData(imdbId);
    //console.log(movie);
        //id is passed an arguement to this handler, this handler's code is written in app.js
    },[ getMovieData,imdbId]);
   
    const reviewSubmitHandler = async()=>{
        try{
        const response = await api.post('/api/v1/reviews',{reviewBody:refText.current.value,imdbId:imdbId});
        console.log(response);

       const updateReviews=[...reviews,{body:refText.current.value}];
       setReviews(updateReviews);
        refText.current.value='';


        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <div className="review-page-container">

        <div className="review-rows-container"> 
            <Carousel className="reviews-carousel-container">
                {/* <Carousel.Caption>{movie.title}</Carousel.Caption> */}
                {
                movie.backdrops && Object.values(movie.backdrops).map((mov)=>{
                    return(
                <Carousel.Item className="reviews-carousel-card">
                        <img className="review-card-image" src= {mov} alt ={movie.title}></img>
                        <Carousel.Caption>
          <h2>{movie.title}</h2>
          <h3>Out on Your Nearest theatres from {movie.releaseDate}</h3>
          </Carousel.Caption>
                </Carousel.Item>
                    )
                })}
            </Carousel>
            </div>

            <div className="review-info-container">
            <div className="review-input">
            <ReviewForm reviewSubmitHandler={reviewSubmitHandler} refText={refText} defaultValue={"Hey, feel free to submit a review "}></ReviewForm>
            <div className="reviews-shown">
            <Col><hr/></Col>
             <div className="review-submitted">
                {
                    (reviews)?reviews.map((r)=>{
                        return(
                            <>
                            <Col>{r.body}</Col>
                            <Row>
                                <Col><hr/></Col>
                            </Row>
                            </>
                        )
                    })
                    ://review validation
                    <Col></Col>
                }
             </div>
            </div>
            </div>
                </div>
        
        </div>
        </>
    )
};

export default Reviews;