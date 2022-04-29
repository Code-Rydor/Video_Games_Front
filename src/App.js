
// (5 points) As a developer, I want to build an aesthetically pleasing user interface.

// (5 points) As a developer, I want to write a sample evaluation question of my own that can be answered by analysis of the 
//            API data. 

// Question: Since 2010, what year had the most video games sales in North America

// (10 points) As a video game enthusiast, I want to see a data visualization of the analyzed data regarding the developer 
//             created sample evaluation question.
// Bonus:
// (5 points) As a video game enthusiast, I want to see a data visualization of which publishers have had the most success per 
//            console.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayConsoleSales from './components/DisplayConsoleSales/DisplayConsoleSales';
import DisplaySearchedGames from './components/DisplaySearchedGames/DisplaySearchedGames';


function App() {

  const [games, setGames] = useState([])
  const [input, setInput] = useState('')
  const [filteredGames, setFilteredGames] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    try{
      let response = await axios.get("https://localhost:7260/api/games");
      setGames(response.data);
    } catch (ex) {
      console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    let filteredResults = games.filter((game) => {
      if(game.name.toLowerCase() == input.toLowerCase()) return true
    })
    setToggle(true)
    setFilteredGames(filteredResults)
    setGames(filteredResults)
  }

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} input={input} setInput={setInput}/>
      <DisplayConsoleSales toggle={toggle} games={games} />
      <DisplaySearchedGames filteredGames={filteredGames} input={input} />
    </div>
  );
}

export default App;