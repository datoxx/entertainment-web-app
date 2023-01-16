import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import TrendingSlider from '../components/TrendingSlider';
import IconBookmarkEmpty from '../svg/IconBookmarkEmpty';


const Home = () => {

    const { movies, search, handleClickedBookmark } = useContext(StoreContext)

    const searchResult = movies.filter(list => list.title.toLowerCase().includes(search));

    return ( 
        <MovesContainer>
            { search &&  <Title>Found {searchResult.length} results for "{search}"</Title> }
            { search === "" ? <TrendingSlider /> : null }
            { search === "" ?  <Title>Recommended for you</Title> : null }
            <MovieListContainer>
                {searchResult.map(movie => (
                    <MovieCard key={movie.title}>
                        <img className="listmovie" src={movie.thumbnail.regular.small} alt="movie" />
                        <BookmarkWrapper onClick={() => handleClickedBookmark(movie.title)}>
                            <IconBookmarkEmpty clickedBookmark={movie.isBookmarked}  />
                        </BookmarkWrapper>
                        <MoviesInfoContainer>
                            <MoviesSubTitle>
                                <span>{movie.year}</span>
                                <span className="dot"></span>
                                <img  
                                    src={process.env.PUBLIC_URL + `/assets/icon-category-${ movie.category === "Movie" ? "movie" : "tv" }.svg`}
                                     alt="seriesIcon"
                                />       
                                <span>{movie.category}</span>
                                <span className="dot"></span>
                                <span>{movie.rating}</span>
                            </MoviesSubTitle>
                            <TrendMovieTitle>{movie.title}</TrendMovieTitle>
                        </MoviesInfoContainer>
                    </MovieCard>
                ))}
            </MovieListContainer>
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
const MovieListContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px 15px;
    max-width: 343px;
    width: 100%;
`

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 164px;
    width: 100%;
    position: relative;
    gap: 8px;

    .listmovie {
        width: 100%;
        border-radius: 8px;
    }
`

const BookmarkWrapper = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #10141E;
    mix-blend-mode: normal;
    opacity: 0.5;
    position: absolute;
    top: 8px;
    right: 8px;

    &:hover {
        background: #FFFFFF;
        opacity: 1;
        cursor: pointer;
        svg{
            stroke: black;
        }
    }
`

const MoviesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
`

const MoviesSubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 6px;

    span {
        font-weight: 300;
        font-size: 11px;
        line-height: 14px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
    }

    .dot {
        height: 2px;
        width: 2px;
        border-radius: 50%;
        background: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
`

const TrendMovieTitle = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
`