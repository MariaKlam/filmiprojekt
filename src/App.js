import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movie from "./components/MovieList.js";
import SearchBox from "./components/SearchBox.js";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=abc943e25a6ebfc0e3a3e1d5b08a7413";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    //`http://api.themoviedb.org/3/search/movie?api_key=abc943e25a6ebfc0e3a3e1d5b08a7413&query=${searchValue}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  console.log(movies);
  return (
    movies && (
      <div className="body">
        <h1>Populaarsemad FILMID</h1>{" "}
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <ol className="filmiNimekiri">
          {movies.map((movie) => (
            <li className="card">
              <Movie key={movie.id} {...movie} />
            </li>
          ))}{" "}
        </ol>
      </div>
    )
  );
}

export default App;
