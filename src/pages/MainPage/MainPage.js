import React, { useEffect, useState } from "react";
import { fetchPokemons } from '../../api/fetchPokemons';
import Pagination from '../../components/Pagination/Pagination'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
const MainPage = () =>  {
  const [ pokemonList, setPokemonList ] = useState([]);
  const [ offset, setOffset ] = useState(10);
  const [page, setPage ] = useState(1);
  const [ pageCount, setPageCount ] = useState(0);

const limit = 10;
useEffect(() => { 
  fetchPokemons(limit, offset)
  .then((data)=> {
    setPokemonList(data.results);
    setPageCount(Math.ceil(data.count / 10))
  });
}, [offset])


const handleChangePage = (type) => {
  if(type === 'next') {
    setOffset(prev => prev += 10)
    setPage(prev => prev += 1);
  }
  else {
    if(offset <= 10) return 
    setOffset(prev => prev - 10)
  }
} 
  return (

    <div className="mainPage">
        <Pagination
            pageCount={pageCount}
            changeOffset={handleChangePage}
            page={page}
        />
      <div className="container">
      <div className="pokemonList">
    {pokemonList.map(pokemon => <PokemonCard
  pokemon={pokemon} />)}
        </div> 
      </div>

    </div>
  );
}

export default MainPage;
