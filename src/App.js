import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import './index.css';
const App = () =>  {
    const [ theme, setTheme ] = useState('dark');
    const [ list, setList ] = useState([]);


    const toogleTheme  = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }


    useEffect(() => {
        fetchPokemons(setList)
    }, [])
    console.log(list, 'list');
    return (
        <div className={`app ${theme}`}>
         <h1>POKEMON</h1>
            <button
                onClick={toogleTheme}
                className="button">
                Change Theme
            </button>
            <PokemonCard list={list}/>

        </div>
    );
}

export default App;