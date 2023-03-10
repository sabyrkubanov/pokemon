import React from 'react';
import Header from "../../Header/Header";
import classes from "./FavoritePokemon.module.css";
const FavoritePokemon = () => {
    return (
        <>
            <Header/>
            <div className={classes.container}>
                <div className={classes.pokemons}>
                    <div>Name</div>
                    <div>Name</div>
                    <div>Name</div>


                </div>
            </div>

        </>

    );
};

export default FavoritePokemon;