
import styled from 'styled-components';
import { MovesObject } from '../types/moves';
import IconBookmarkEmpty from '../svg/IconBookmarkEmpty';
import { useContext } from 'react';
import { StoreContext } from '../context/MovesContext';

interface ListProps {
    list:MovesObject[],
}

const List = ({list }:ListProps) => {


    const { handleClickedBookmark } = useContext(StoreContext)


    return ( 
        <MovieListContainer>
        {list?.map(movie => (
            <MovieCard key={movie.title}>
                <HoverContainer>
                    <img className='playicon' src={process.env.PUBLIC_URL + '/assets/icon-play.svg'} alt='play-icon' />
                    <span className='playtext'>Play</span>
                </HoverContainer>
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
     );
}
 
export default List;


const MovieListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px 15px;
    padding-right: 25px;
    width: 100%;
    @media (min-width: 375px) {
        grid-template-columns: 1fr 1fr;
        gap: 24px 29px;
    }
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        gap: 40px 32px;
    }
`

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;        
    position: relative;
    gap: 8px;


    .listmovie {
        width: 100%;
        border-radius: 8px;
    }
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        
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
        @media (min-width: 375px) {
            font-size: 13px;
            line-height: 16px;
        }
    }

    .dot {
        height: 2px;
        width: 2px;
        border-radius: 50%;
        background: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
        @media (min-width: 375px) {
            height: 3px;
            width: 3px;
        }
    }

`
const TrendMovieTitle = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    @media (min-width: 375px) {
        font-size: 18px;
        line-height: 23px;
    }
`

const HoverContainer = styled.div`
    display: none;
    ${MovieCard}:hover & {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        gap: 19px;
        opacity: 0.5;
        padding: 9px 24px 9px 9px;
        transform: translate(-50%, -100%);
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