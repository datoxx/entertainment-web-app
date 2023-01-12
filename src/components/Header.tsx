import { Link } from "react-router-dom";
import styled from 'styled-components';
import logo  from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import {ReactComponent as IconNavHome }from "../assets/icon-nav-home.svg";
import{ReactComponent as IconNavMovies } from "../assets/icon-nav-movies.svg";
import {ReactComponent as IconNavTvSeries}  from "../assets/icon-nav-tv-series.svg";
import { useState } from 'react';
import{ReactComponent as IconNavBookmark } from "../assets/icon-nav-bookmark.svg";



const Header = () => {

    const [navIconIsClicked, setNavIconIsClicked] = useState<string>("home")

    return ( 
        <Head>
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ListContainer>
                    <li>
                        <Link to="/">
                            <StyledIconNavHome iconcolor={navIconIsClicked} onClick={() => setNavIconIsClicked("home")} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/moves">
                             <StyledIconNavMovies  iconcolor={navIconIsClicked} onClick={() => setNavIconIsClicked("moves")} />
                        </Link>

                    </li>
                    <li>
                        <Link to="/series">
                            <StyledIconNavTvSeries iconcolor={navIconIsClicked} onClick={() => setNavIconIsClicked("series")} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookmarked">
                            <StyledIconNavBookmark  iconcolor={navIconIsClicked} onClick={() => setNavIconIsClicked("bookmarked")} />
                        </Link>
                    </li>
                </ListContainer>
            </nav>
            <img className="avatar" src={avatar} alt="avatar" />
        </Head>
     );
}
 
export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #161D2F;
    padding: 16px;
    width: 100%;
    max-width: 375px;
  

    .logo {
        width: 25px;
        height: 20px;
    }

    .avatar {
        width: 24px;
        height: 24px;
    }
`
const ListContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    li {
        list-style-type:none;
    }

`
interface IconPorps {
    iconcolor: string
}

const StyledIconNavHome = styled(IconNavHome)<IconPorps>`
    fill: ${props => props.iconcolor === "home" ? "#FFFFFF" : "#5A698F" };
     &:hover path  {
            fill: red;
        }

`
const StyledIconNavMovies = styled(IconNavMovies)<IconPorps>`
    fill: ${props => props.iconcolor ===  "moves" ? "#FFFFFF" : "#5A698F" };
     &:hover path  {
            fill: red;
        }
`
const StyledIconNavTvSeries = styled(IconNavTvSeries)<IconPorps>`
    fill: ${props => props.iconcolor === "series" ? "#FFFFFF" : "#5A698F" };
     &:hover path  {
            fill: red;
        }
`
const StyledIconNavBookmark = styled(IconNavBookmark)<IconPorps>`
    fill: ${props => props.iconcolor === "bookmarked" ? "#FFFFFF" : "#5A698F" };
     &:hover path  {
            fill: red;
        }
    
`