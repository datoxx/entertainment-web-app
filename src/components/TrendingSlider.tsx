import { useContext } from "react";
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
// // or only core styles
// import "@splidejs/react-splide/css/core";



const TrendingSlider = () => {

    const { movies} = useContext(StoreContext)

    const trendingArray = movies.filter((movie)  => movie.isTrending);

    console.log("misamarti", trendingArray[0].thumbnail.trending?.small.substring(1))

        return ( 
        <MovesContainer>
            <Title>Trending</Title> 
            <Splide
                options={{
                    autoplay: true,
                    interval: 2000,
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
                            <img src={`${movie.thumbnail.trending?.small}`}  alt="movie"/>
                            <BookmarkWrapper>1</BookmarkWrapper>
                            <MoviesInfoContainer>
                                <MoviesSubTitle>
                                    <span>{movie.year}</span>
                                    <span className="dot"></span>
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
    img {
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