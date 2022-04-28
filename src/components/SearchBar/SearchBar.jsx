import React, { useState } from 'react';

import DisplaySearchedGames from '../DisplaySearchedGames/DisplaySearchedGames';


const SearchBar = ({ searchInput, input }) => {
    
    const [searchTerm, setSearchTerm] = useState("");

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     getGameById(searchTerm)
    // }
    function handleSubmit(event) {
        event.preventDefault();
        // <DisplaySearchedGames />
    }

    return ( 
        <div>
            <form onsubmit={handleSubmit}>
                <input type='text' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;