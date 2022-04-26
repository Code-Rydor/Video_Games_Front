import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayConsoleSales from './components/DisplayConsoleSales/DisplayConsoleSales';


function App() {

  const [games, setGames] = useState([])
  const [input, setInput] = useState('')
  let requestReload = true

  // async function getAllGames() {
  //   let response = await axios.get("https://localhost:7260/api/games");
  //   setGames(response.data);
  // }
  
  const searchInput = (event) => {
    setInput(event.target.value)
  }

  // useEffect(() => {
  //   if (requestReload) {
  //     getAllGames();
  //     requestReload = !requestReload
  //   }
  // }, [requestReload])


  return (
    <div>
      <SearchBar searchInput={searchInput} input={input} />
      <DisplayConsoleSales allGameData={games} input={input} />
    </div>
  );
}

export default App;
