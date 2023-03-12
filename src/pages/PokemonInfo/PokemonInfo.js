import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from '../../api/fetchPokemons';
import axios from "axios";
import classes from "./PokemonInfo.module.css";
const PokemonInfo = () => {
    const [ pokemon, setPokemon ] = useState();
    const [ info, setInfo ] = useState('');

    const { id } = useParams();

    useEffect(() => {
        getPokemon(id).then((data => setPokemon(data)));
    }, [ id ])
    console.log(pokemon);

    // const getInfoPokemon = () => {
    //     axios(pokemon?.species.url)
    //         .then((data) => setInfo(data.data))
    //         .catch((error) => console.log(error))
    // }
    //
    // useEffect(() => {
    //     getInfoPokemon()
    //
    // },[pokemon])
    return (
        <div className={classes.pokeinfo}>
                <div className={classes.pokeinfo__img}>
                    <img src={pokemon?.sprites.other.dream_world.front_default}  alt='fd' />
                </div>
            <div>
                <h4>Имя:{pokemon?.name}</h4>
                <h5>Pост : {pokemon?.height}sm</h5>
                <h5>Вес : {pokemon?.weight} grams</h5>
                <h5>{}</h5>
                {/*<h4>скорость захвата: {info.capture_rate} С</h4>*/}

                {/*<h4>order : {info.order}</h4>*/}
                <h5>базовый опыт : {pokemon?.base_experience}</h5>
                <h5>Форма  : </h5>

            </div>


        </div>
    )
}
export default PokemonInfo
