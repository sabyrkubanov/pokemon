import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import { MainPage } from "./pages/MainPage";
import { PokemonInfo } from "./pages/PokemonInfo";
import { Link } from "react-router-dom";
import { fetchPokemonS } from "./api/fetchPokemons";
import Header from "./components/Header/Header";
import ImgIcon from '../src/img/sunny-outline.svg'
const App = () =>  {
  const [ theme, setTheme ] = useState('dark');
  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
useEffect(() => {
  fetchPokemonS(12, 20)
}, [])
  return (
      <>
      <Header>

        <button
            onClick={toogleTheme}
            className="button" >
          <img src={ImgIcon} alt=""/>

        </button>

      </Header>
    <div className={`app ${theme}`}>


      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
       <Route path="/pokemon/:id" element={<PokemonInfo /> }  />
      </Routes>
    </div>
      </>

  );
}

export default App;
