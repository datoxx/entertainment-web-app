import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import TrendingSlider from '../components/TrendingSlider';
import List from '../components/List';


const Home = () => {

    const { movies, search} = useContext(StoreContext)

    const searchResult = movies.filter(list => list.title.toLowerCase().includes(search.toLowerCase()));

    return ( 
        <MovesContainer>
            { 
            search === ""
                ?
                <>
                    <TrendingSlider /> 
                    <Title>Recommended for you</Title> 
                </>
                :
                <Title>Found {searchResult.length} results for "{search}"</Title>  
            }
            <List list={searchResult} />
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
    @media (min-width: 1024px) {
      gap: 40px;
    }
`



const Title = styled.h1`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;
    color: #FFFFFF;
    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
    }

`
