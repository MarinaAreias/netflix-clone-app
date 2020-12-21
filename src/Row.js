import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";


export default function Row({title, fetchUrl}){
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

  console.log(movies);



    return(
        <div className="row">
<h2>{title}</h2>
        </div>
    );
} 