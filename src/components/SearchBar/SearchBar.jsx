import React from 'react';

const SearchBar = ({handleSubmit, input , setInput}) => {
    
    return ( 
        <div className="form-group">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' className="form-control" placeholder="Search for a game..." id="inputDefault" value={input} onChange={(event) => setInput(event.target.value)}/>
                <button type='submit'className="btn btn-outline-light">Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;