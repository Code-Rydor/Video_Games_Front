import React, { useState } from 'react';

import DisplaySearchedGames from '../DisplaySearchedGames/DisplaySearchedGames';


const SearchBar = ({handleSubmit, input , setInput}) => {
    
    const [searchTerm, setSearchTerm] = useState("");


    // function handleSubmit(event) {
    //     event.preventDefault();
    // }

    return ( 
        <div>
            <form onSubmit ={(e)=>handleSubmit(e)}>
                <input type='text' value={input} onChange={(event) => setInput(event.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;





    // function handleSubmit(event) {
    //     event.preventDefault();
    //     getGameById(searchTerm)
    // }