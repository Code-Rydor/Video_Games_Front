import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import DisplayConsoleSales from './components/DisplayConsoleSales/DisplayConsoleSales';
import DisplayGameDetails from './components/DisplayGameDetails/DisplayGameDetails';
import DisplaySearchedGames from './components/DisplaySearchedGames/DisplaySearchedGames';


function App() {

  const [games, setGames] = useState([])
  const [input, setInput] = useState('')
  // const [gameId, setGameId] = useState()


  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    try{
      //debugger;
      let response = await axios.get("https://localhost:7260/api/games");
      setGames(response.data);
    } catch (ex) {
      console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
    }
  }
  
  // async function getGameById(request) {
  //   try {
  //     debugger;
  //     let response = await axios.get(`https://localhost:7260/api/games/${request}`);
  //     console.log("getGameById function response data", response.data)
  //     setGameId(response.data.id);
  //   } catch (ex) {
  //     console.log(`ERROR in getAllGames EXCEPTION: ${ex}`);
  //   }
  // }


  const searchInput = (event) => {
    setInput(event.target.value)
  }


  return (
    <div>
      <SearchBar searchInput={searchInput} input={input} />
      {/* <DisplayConsoleSales games={games} /> */}
      <DisplaySearchedGames games={games} input={input} />
    </div>
  );
}

export default App;
