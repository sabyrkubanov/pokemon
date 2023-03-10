import React from 'react';
import {Route, Routes} from "react-router-dom";
import AboutPokemon from "./components/pages/AboutPokemon/AboutPokemon";
import MainPage from "./components/pages/MainPage/MainPage";
import NotFound from "./components/pages/NotFound/NotFound";
import FavoritePokemon from "./components/pages/FavoritePokemon/FavoritePokemon";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<AboutPokemon/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/favorite' element={<FavoritePokemon/>}/>

            </Routes>

        </div>
    );
};

export default App;