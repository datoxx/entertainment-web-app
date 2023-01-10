import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


    return ( 
        <nav>
            <ul>
                <li>
                    <Link to="/">main </Link>
                </li>
                <li>
                    <Link to="/series">series</Link>
                </li>
                <li>
                    <Link to="/moves">moves</Link>
                </li>
                <li>
                    <Link to="/bookmarked">bookmarked</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Header;