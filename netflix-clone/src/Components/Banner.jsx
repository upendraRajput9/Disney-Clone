import React, { useEffect, useState } from 'react';
import axios from '../Functions/axios';
import requests from '../Functions/Request';

const Banner = () => {

    const [movie,setMovie] = useState([])

const sortDescri=(string,n)=>{
    return string?.length>n?string.substr(0,n-1) + '...':string;
}

useEffect(()=>{
async function fetch(){
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
        request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]
    )
}
fetch()
},[]);

    return (
        <div className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
            <div className="banner-contains">
                <h1 className="banner-title">{
                    movie?.title||movie?.name||movie?.original_name
                }</h1>               
                <div className="banner-buttons">
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h2 className='banner-descri'>
                    {sortDescri(movie?.overview,150)}
                </h2>
            </div>
            <div className="banner-fade-bottom" />
        </div>
    )
}

export default Banner
