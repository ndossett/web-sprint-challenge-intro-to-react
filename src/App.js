import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character'
import './App.css'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data.results)
      console.log(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(char => <Character key={char.name} characters={char}/>)}
    </div>
  );
}

export default App;
