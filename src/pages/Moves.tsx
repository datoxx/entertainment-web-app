
import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';

const Moves = () => {

const { movies, search } = useContext(StoreContext)

    const movesArray = movies.filter(movie => movie.category === "Movie" );
    const searchResult = movesArray.filter(movie => movie.title.toLowerCase().includes(search));

    return ( 
        <MovesContainer>
           <Title> { search !== "" ? `Found ${searchResult.length} results for "${search}"` : "Movies" }  </Title> 
        </MovesContainer>
     );
}
 
export default Moves;


const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0px 16px;
    gap: 24px;
`

const Title = styled.h1`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;
    color: #FFFFFF;
`