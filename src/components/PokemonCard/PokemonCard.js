import React from 'react'
import classes from "./PokemonCard.module.css";


const PokemonCard = ({list}) => {
    console.log(list)

    return (
        <div className={classes.blocks}>
            {
                list.map((item,id) => <p className={classes.blocks__block}>Name : <span>{item.name}</span></p>)
            }

        </div>
    );
};

export default PokemonCard;