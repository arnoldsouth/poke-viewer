import './App.css';

import React from 'react';

import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="container">
      <div className="header">pokeVIEWER</div>
      <PokemonList />
    </div>
  );
}

export default App;
