import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  const [games, setGames] = useState([])
  const [input, setInput] = useState('')

  async function getAllGames() {
    let response = await axios.get("https://localhost:7260/api/games");
    setGames(response.data);
  }
  
  const searchInput = (event) => {
    setInput(event.target.value)
  }



  return (
    <div>
      <SearchBar searchInput={searchInput} input={input} />
    </div>
  );
}

export default App;
