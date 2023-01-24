import axios from '../Functions/axios';
import React, { useEffect, useState } from 'react'

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request
    }
    fetchData();
  }, [fetchUrl])
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies?.map((movie) => (
         ( (isLargeRow && movie.poster_path) ||
          ( !isLargeRow && movie.backdrop_path)) && (
          <img
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            key={movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} alt="" />)
        ))}
      </div>
    </div>
  )
}

export default Row
