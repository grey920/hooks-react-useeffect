import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Movie from './Movie';
import InfiniteScroll from "react-infinite-scroll-component";

function App() {


  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=like_count&limit=30")
      .then((res) => {
        let movieArray = res.data.data.movies;
        console.log(movieArray);
        setMovies(movieArray);

      });
  }, []);


  return (
    <>
      <h1>BEST MOVIE LIST</h1>
      <p>The best movies get rating over 8</p>
      <div className="Container">
        {movies.map((movie, index) => (
          <Movie key={index}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image} />
        ))}
      </div >
    </>
  );


}

export default App;
