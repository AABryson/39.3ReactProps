import React from 'react'
import './App.css';
import Pokedex from './Pokedex';


function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
        <Pokedex pokeArray = {[{id: 4, name: 'Charmander', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', img:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png', type: 'normal', base_experience: 65}
  ]} />
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */