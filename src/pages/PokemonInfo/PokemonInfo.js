import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
import classes from "./PokemonInfo.module.css";
const PokemonInfo = () => {
    const [ pokemon, setPokemon ] = useState();
    const { id } = useParams();

    useEffect(() => {
        getPokemon(id).then((data => setPokemon(data)));
    }, [ id ])
    console.log(pokemon);




    return (
        <div className={classes.pokeinfo}>
                <div className={classes.pokeinfo__img}>
                    <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
                </div>
            <div>
                <h4>Имя:{pokemon?.name}</h4>
                <h5>Pост : {pokemon?.height}sm</h5>
                <h5>Вес : {pokemon?.weight} grams</h5>

                <h5>базовый опыт : {pokemon?.base_experience}</h5>
                {/*<h5>Форма  : {pokemon?.forms.name} </h5>*/}
                <h2>{pokemon?.types.type}</h2>
                <h5>ID : {pokemon?.id}</h5>


            </div>


        </div>
    )
}
export default PokemonInfo
