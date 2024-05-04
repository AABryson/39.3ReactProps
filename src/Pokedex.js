import React from 'react'
import Pokecard from './Pokecard'

function Pokedex(props) {
    let pokeArray = props.pokeArray
    const pokecards = pokeArray.map(p => {
        <Pokecard p = {p} />
    })
    return (
  
    <div>{pokecards}</div>
  )
    }





export default Pokedex