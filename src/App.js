import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character';
import styled from 'styled-components'

const AppDiv = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const App = () => {

  const [characters, setCharacter] = useState([])

  useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`)
  .then(res => {
    setCharacter(res.data.results)
  })}, [])

  return (
    <AppDiv >
      <h1 className="Header">Characters</h1>
      {characters.map(char => <Character key={char.name} characters={char}/>)}
    </AppDiv>
  );
}

export default App;
