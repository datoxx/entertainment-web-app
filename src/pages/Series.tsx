import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import List from '../components/List';



const Series = () => {

    const { movies, search } = useContext(StoreContext)

    const seriesArray = movies.filter(movie => movie.category === "TV Series" );
    const searchResult = seriesArray.filter(series => series.title.toLowerCase().includes(search.toLowerCase()));

    return ( 
        <MovesContainer>
           <Title> { search !== "" ? `Found ${searchResult.length} results for "${search}"` : "TV Series" }  </Title> 
           <List list={searchResult} />
        </MovesContainer>
     );
}
 
export default Series;


const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 0px 16px;
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