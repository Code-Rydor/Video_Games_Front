import React from 'react';

const SearchBar = ({handleSubmit, input , setInput}) => {
    
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