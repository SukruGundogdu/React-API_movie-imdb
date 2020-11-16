import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import './App.css';
import {SearchBox} from "./components/SearchBox";
import {CardList} from "./components/CardList";

const apiKey = "8aad6bf4ccd0b4b0eee8d8deb8167978"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const MovieContext  = createContext();

function Movie() {

  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("Matrix")

  useEffect(()=>{
      axios.get(
          baseUrl, {params: {
          api_key: apiKey,
          page: 1,
          query: searchKeyword
          }}
      )
      .then((res)=> setMovieList(res?.data?.results))
      .catch()
      .finally()
  },[searchKeyword])

  return (
    <div className="App">
      <MovieContext.Provider value={{ movieList, setSearchKeyword }}>
          <SearchBox />
          <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;