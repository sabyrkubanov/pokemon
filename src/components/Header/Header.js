import React from 'react';
import {Link} from "react-router-dom";
import img from '../img/pokeapi.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"> <img src={img} alt=""/></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/about">About Pokemon</Link></li>
                        <li><Link to="/favorite">Favorite</Link></li>
                        <li><Link to="/bestpokemon">Best pokemon</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Header;