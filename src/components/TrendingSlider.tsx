import { useContext  } from 'react';
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

import IconBookmarkEmpty from '../svg/IconBookmarkEmpty';
import { MovesObject } from '../types/moves';



const TrendingSlider = () => {

    const { movies, setMovies} = useContext(StoreContext)

    const trendingArray = movies.filter((movie)  => movie.isTrending);

    const handleClickedBookmark = (title: string) => {
        const moviesClone: MovesObject[] = movies.slice();
        const selectMovie: MovesObject | undefined = moviesClone.find((move:MovesObject) => move.title === title);
        const movieindex = moviesClone.findIndex((move:MovesObject) => move.title === title);

        if(selectMovie) selectMovie.isBookmarked = !selectMovie.isBookmarked;  
        moviesClone.splice(movieindex, 1, selectMovie as MovesObject );

        setMovies(moviesClone)
    }


    console.log("misamarti", trendingArray[0].thumbnail.trending?.small.substring(1))

        return ( 
        <MovesContainer>
            <Title>Trending</Title> 
            <Splide
                options={{
                    autoplay: true,
                    interval: 4000,
                    type: "loop",
                    perPage: 3.5,
                    focus:  1,
                    gap: "2.5rem",
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        1024: {
                            perPage: 2.5,
                            gap:  '2.5rem',
                        },
                        375: {
                            perPage: 1.5,
                            gap:  '1rem',
                        },
                    }
                }}
                aria-label="Trending Movies"
            >
                {trendingArray.map((movie) =>
                    <SplideSlide  key={movie.title}>
                        <TrendMovieContainer>
                            <img className="trendImage" src={`${movie.thumbnail.trending?.small}`}  alt="movie"/>
                            <BookmarkWrapper onClick={() => handleClickedBookmark(movie.title)}>
                                <IconBookmarkEmpty clickedBookmark={movie.isBookmarked}  />
                            </BookmarkWrapper>
                            <MoviesInfoContainer>
                                <MoviesSubTitle>
                                    <span>{movie.year}</span>
                                    <span className="dot"></span>
                                    <img  src={process.env.PUBLIC_URL + '/assets/icon-category-movie.svg'} alt="moviesIcon"/>
                                    <span>{movie.category}</span>
                                    <span className="dot"></span>
                                    <span>{movie.rating}</span>
                                </MoviesSubTitle>
                                <TrendMovieTitle>{movie.title}</TrendMovieTitle>
                            </MoviesInfoContainer>
                        </TrendMovieContainer>
                    </SplideSlide>
                )}
            </Splide>

                    {/* <img src={`${trendingArray[0].thumbnail.trending?.small}`} alt="imageee" /> */}
       


        </MovesContainer>
     );
}
 
export default TrendingSlider;

const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    max-width: 100%;
    

 `

const Title = styled.h1`
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.3125px;
    color: #FFFFFF;
`


const TrendMovieContainer = styled.div`
    position: relative;
    max-width: 100%;
    width: auto;
    .trendImage {
        max-width: 100%;
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
    position: absolute;
    bottom: 16px;
    left: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
`

const MoviesSubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;

    span {
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
    }

    .dot {
        height: 3px;
        width: 3px;
        border-radius: 50%;
        background: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
`

const TrendMovieTitle = styled.h3`
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
`