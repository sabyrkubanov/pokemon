import React from 'react';
import Header from "../../Header/Header";
import classes from "./aboutPokemon.module.css";

const AboutPokemon = () => {
    return (
        <>
        <Header/>
        <div className={classes.container}>
            <div className={classes.pokemonAbout}>
                <h2>NAME</h2>
                <h1>IMAGE</h1>

            </div>
            </div>




        </>
    );
};

export default AboutPokemon;