import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';



const TrendingSlider = () => {

    const { movies} = useContext(StoreContext)

    const trendingArray = movies.filter(movie => movie.isTrending === true );

    return ( 
        <MovesContainer>
            <Title>Trending</Title> 
        </MovesContainer>
     );
}
 
export default TrendingSlider;

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