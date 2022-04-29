const DisplaySearchedGames = ({ filteredGames, input }) => {  //useEffect is how I render an empty array first and then populate with
    console.log(filteredGames);                               //searched game... somehow
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Platform</th>
                    <th>Release Year</th>
                    <th>Publisher</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {filteredGames
                    .map((game, index) => {
                        return (
                            <tr key={index}>
                                <td>{game.name}</td>
                                <td>{game.platform}</td>
                                <td>{game.year}</td>
                                <td>{game.publisher}</td>
                                <td>{game.genre}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};
 
export default DisplaySearchedGames;