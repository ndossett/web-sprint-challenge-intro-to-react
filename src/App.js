import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character';


const App = () => {

  let [character, setCharacter] = useState({})

  useEffect(() =>{
  axios.get(`https://swapi.dev/api/people`)
  .then(res => {
    const data = res.data.results
    return setCharacter(character = data)})
  }, [])
  
  console.log(character[0])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <Character person= {character}/> */}
    </div>
  );
}

export default App;
