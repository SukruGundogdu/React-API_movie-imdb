import React, {useEffect, useState} from "react";
import {Card} from "../Card"
import axios from "axios";

//8aad6bf4ccd0b4b0eee8d8deb8167978
const apiKey = "8aad6bf4ccd0b4b0eee8d8deb8167978"; //temporary
//https://api.themoviedb.org/3/search/movie?
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const CardList = () => {
    //useState
    const [movieData, setMovieData] = useState(null);

    //useEffect - Axios API call
    useEffect(() =>{
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,   //api_key=<<api_key>>&
                page:1,             //page=1&
                query:"Star Wars"   
            }
        })
        .then((res) => setMovieData(res.data.results))
        .catch((err) => console.log(err))
    },[]);
    
       
    return (
        // data mapping 
        <>
        { movieData && movieData.map(movie => {
            return <Card title={movie.title}/>
        })
            }
        </>
    )
}