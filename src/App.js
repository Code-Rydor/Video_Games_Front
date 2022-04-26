import React, { useState } from 'react';


function App() {

  const [games, setGames] = useState([])

  async function getAllGames() {
    let response = await axios.get("https://localhost:7260/api/games");
    setGames(response.data);
}



  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
}

export default App;
