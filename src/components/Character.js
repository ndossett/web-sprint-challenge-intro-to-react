// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharDiv = styled.div`
    border: 2px solid black;
    width: 40%;
    border-radius: 2px;
    text-align: center;
    margin: 1rem auto;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    &:hover {
        background-color: yellow;
    }
`

const Character = ({characters}) => {
    return (
        <CharDiv>
            <h1>{characters.name}</h1>
            <p>D.O.B: {characters.birth_year} <br></br> Gender: {characters.gender}</p>
        </CharDiv>
    )
}


export default Character