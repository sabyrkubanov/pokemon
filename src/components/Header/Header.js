import React from 'react';
import {Link} from "react-router-dom";
import img from '../../img/pokeapi.png'

const Header = ({children}) => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"> <img src={img} alt=""/></Link>
                    <ul  className="nav_link box ">
                        <li><Link to="/bestpokemon">По весу </Link></li>
                        <li><Link to="/about">Best pokemon</Link></li>
                        {children}
                    </ul>
                </div>

            </nav>


        </header>
    );
};

export default Header;