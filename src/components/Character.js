// Write your Character component here
import React from 'react';
// import './App.css'

const Character = ({characters}) => {
    return (
        <div>
            <h1>{characters.name}</h1>
            <p>D.O.B: {characters.birth_year}      Gender: {characters.gender}</p>
        </div>
    )
}


export default Character