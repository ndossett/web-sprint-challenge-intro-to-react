import React from 'react'
import styled from 'styled-components'

const CharDiv = styled.div`
    background: white;
    text-align:center;
    width:50%;
    margin:1rem 0;
    color:grey;
    border-radius:2rem;
`

const Character = ({characters}) => {
    
    return (
        <CharDiv>
         <h1>{characters.name}</h1>
    <p>Height: {characters.height}      Hair: {characters.hair_color}</p>
        </CharDiv>
    )
}

export default Character
