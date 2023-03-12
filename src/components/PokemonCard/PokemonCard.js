import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from "./PokemonCard.module.css";



const PokemonCard = ({ pokemon }) => {
  const [ image, setImage ] = useState('');
  useEffect(() => {
    axios.get(pokemon.url).then((data) => {
      console.log(data, 'respoonse ');
      setImage(data.data.sprites.other.dream_world.front_default)
    })
  }, [ pokemon.url ]);





  return (


    <React.Fragment>
      <Link to={`/pokemon/${pokemon.name}`}>
      <div className={classes.pokemonCard}>
        <h2 className={classes.pokemonCard__h2}>{pokemon.name}</h2>
       <img  src={image} alt='pokemon imgages' className={classes} />
    </div>
      </Link>
    </React.Fragment>

  )
}

export default PokemonCard