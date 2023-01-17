import styled from 'styled-components';
import { useContext } from 'react';
import { StoreContext } from '../context/MovesContext';
import List from '../components/List';



const Bookmarked = () => {

  const { movies, search } = useContext(StoreContext)

  const movesArray = movies.filter(movie => movie.category === "Movie" && movie.isBookmarked );
  const seriesArray = movies.filter(movie => movie.category === "TV Series"  && movie.isBookmarked );

  const moviesSearchResult = movesArray.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
  const seriesSearchResult = seriesArray.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));




    return (
        <MovesContainer>
            <Title>Bookmarked Movies</Title>
            <List list={moviesSearchResult} />

            <Title>Bookmarked TV Series</Title>
            <List list={seriesSearchResult} />
        </MovesContainer>
      );
}
 
export default Bookmarked;

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