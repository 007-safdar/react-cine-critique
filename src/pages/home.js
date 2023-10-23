import React from 'react';
import Hero from '../components/hero/Hero';
function Home({movies}) {
    return (
        <>
            <Hero Movies ={movies}/>
        </>
    )
};

export default Home;