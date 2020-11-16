import {useContext} from 'react';
import {Card} from "../Card";
import {MovieContext} from "../../Movie";
import {StyledCardList} from "./CardList.style"
export const CardList = () => {
  const {movieList, baseImageUrl} = useContext(MovieContext);
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                poster_path={
                    movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://a.wattpad.com/cover/229148238-288-k40156.jpg"}
                id={movie.id}
                // imgSrc={baseImageUrl + movie.poster_path}
                />)
            )}
        </StyledCardList>
    )
}