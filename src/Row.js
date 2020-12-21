import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";



const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({title, fetchUrl, isLargeRow}){
  const [movies, setMovies] = useState([]);

  //a snippet of code that runs based on a specific condition/variable
  useEffect(() => {
//if [], run once wen row loads, and dont run again
  async function fetchData(){
      const request = await axios.get(fetchUrl);
  
  setMovies(request.data.results);
 return request;
}

     fetchData();
  }, [fetchUrl]);


    return(
        <div className="row">

       <h2>{title}</h2>

       <div className="rowPosters">

        {movies.map(movie => (
              <img 
         
              key={movie.id}
              className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
   src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
   alt={movie.name}/> 
           ))}
</div>
        </div>
    );
} 