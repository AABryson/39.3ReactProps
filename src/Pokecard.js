import React from 'react'

function Pokecard(props) {
    return (
        <React.Fragment>
            <h1>{props.p.name}</h1>
            <img src={props.p.img} alt=""/>
            <h3>{props.p.type}</h3>
        </React.Fragment> 
    )

}







export default Pokecard