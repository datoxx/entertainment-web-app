import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import TrendingSlider from '../components/TrendingSlider';




const Home = () => {

    const { movies, search } = useContext(StoreContext)

    const searchResult = movies.filter(list => list.title.toLowerCase().includes(search));

    return ( 
        <MovesContainer>
            <TrendingSlider />
            <Title> { search !== "" ? `Found ${searchResult.length} results for "${search}"` : "Movies" }  </Title> 
        </MovesContainer>
     );
}
 
export default Home;


const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 16px;
    gap: 24px;
`

const Title = styled.h1`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;
    color: #FFFFFF;
`