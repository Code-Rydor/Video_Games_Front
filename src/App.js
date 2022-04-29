import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayConsoleSales from './components/DisplayConsoleSales/DisplayConsoleSales';
import DisplaySearchedGames from './components/DisplaySearchedGames/DisplaySearchedGames';
import DisplayPublisherSales from './components/DisplayPublisherSales/DisplayPublisherSales';
import DisplayNAYearlySales from './components/DisplayNAYearlySales/DisplayNAYearlySales';
import "bootswatch/dist/darkly/bootstrap.min.css";

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
      <SearchBar handleSubmit={handleSubmit} input={input} setInput={setInput} />
      <DisplaySearchedGames filteredGames={filteredGames} input={input} />
      <DisplayConsoleSales toggle={toggle} games={games} />
      <DisplayNAYearlySales toggle={toggle} games={games} />
      <DisplayPublisherSales games={games} />
    </div>
  );
}

export default App;