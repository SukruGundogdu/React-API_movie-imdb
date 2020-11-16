import { useHistory } from "react-router-dom";
import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = (props) => {
    const history = useHistory();
    return (
        <StyledCardWrapper onClick={() => history.push(`/detail/${props.id}`)}>
            <StyledMovieImage src={props.poster_path} alt={"Movie Poster"}/>
            <StyledText>{props.title}</StyledText>
        </StyledCardWrapper>
    )
}