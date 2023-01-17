import { useContext  } from 'react';
import { StoreContext } from '../context/MovesContext';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

import IconBookmarkEmpty from '../svg/IconBookmarkEmpty';


const TrendingSlider = () => {

    const { movies, handleClickedBookmark} = useContext(StoreContext)

    const trendingArray = movies.filter((movie)  => movie.isTrending);

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

                        768: {
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
                            <HoverContainer>
                                <img className='playicon' src={process.env.PUBLIC_URL + '/assets/icon-play.svg'} alt='play-icon' />
                                <span className='playtext'>Play</span>
                            </HoverContainer>
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


        </MovesContainer>
     );
}
 
export default TrendingSlider;

const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    width: 100%;
    @media (min-width: 375px) {
        gap: 25px;
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


const TrendMovieContainer = styled.div`
    position: relative;
    max-width: 100%;
    width: auto;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        
    }
    .trendImage {
        max-width: 100%;
        border-radius: 8px;
        @media (min-width: 1440px) {
            width: 100%;
        }
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

    @media (min-width: 768px) {
        top: 16px;
        right: 24px;
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
    @media (min-width: 375px) {
        bottom: 24px;
        right: 24px;
    }
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
        @media (min-width: 375px) {
            font-size: 15px;
            line-height: 19px;
        }
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
    @media (min-width: 375px) {
        font-size: 24px;
        line-height: 30px;
    }
`

const HoverContainer = styled.div`
    display: none;
    ${TrendMovieContainer}:hover & {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        gap: 19px;
        opacity: 0.5;
        padding: 9px 24px 9px 9px;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        mix-blend-mode: normal;
        border-radius: 28.5px;
        .playtext {
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
            color: black;
            @media (max-width: 480px) {
                font-size: 13px;
                line-height: 28px;
            }
        }
        .playicon {
            background: black;
            border-radius: 50%;
            border: 1px solid black;
            @media (max-width: 480px) {
                width: 20px;
                height: 20px;
            }
        }
        @media (max-width: 480px) {
                gap: 10px;
                padding: 6px 18px 6px 6px;
        }
    }
`