import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useState } from 'react';

import IconNavHome from '../svg/IconNavHome';
import IconNavMovies from '../svg/IconNavMovies';
import IconNavTvSeries from '../svg/IconNavTvSeries';
import IconNavBookmark from '../svg/IconNavBookmark';

const Header = () => {

    const [navIconIsClicked, setNavIconIsClicked] = useState<string>("home")

    return ( 
        <Head>
            <img className="logo" src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo" />
            <nav>
                <ListContainer>
                    <li onClick={() => setNavIconIsClicked("home")}>
                        <Link to="/">
                            <IconNavHome iconcolor={navIconIsClicked}  />
                        </Link>
                    </li>
                    <li onClick={() => setNavIconIsClicked("moves")}>
                        <Link to="/moves">
                             <IconNavMovies iconcolor={navIconIsClicked}  />
                        </Link>

                    </li>
                    <li  onClick={() => setNavIconIsClicked("series")}>
                        <Link to="/series">
                            <IconNavTvSeries iconcolor={navIconIsClicked} />
                        </Link>
                    </li>
                    <li  onClick={() => setNavIconIsClicked("bookmarked")} >
                        <Link to="/bookmarked">
                            <IconNavBookmark iconcolor={navIconIsClicked} />
                        </Link>
                    </li>
                </ListContainer>
            </nav>
            <img className="avatar" src={process.env.PUBLIC_URL + '/assets/image-avatar.png'} alt="avatar" />
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

    .logo {
        width: 25px;
        height: 20px;
        @media (min-width: 768px) {
            width: 32px;
            height: 25px;
        }
    }

    .avatar {
        width: 24px;
        height: 24px;
        @media (min-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }

    @media (min-width: 768px) {
        padding: 25px;
        border-radius: 10px;
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;  
        width: 96px;    
        padding: 30px;
        min-height: 95vh;
        border-radius: 20px;
        position: fixed;
        left: 20px;
        top: 20px;

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

    @media (min-width: 768px) {
        gap: 32px;

    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;  
        justify-content: space-between;
        align-items: center;
        margin-top: -25vh;
    }

`