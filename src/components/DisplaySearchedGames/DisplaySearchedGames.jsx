const DisplaySearchedGames = ({ filteredGames}) => {
    console.log(filteredGames);
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="row">Title</th>
                    <th scope="row">Platform</th>
                    <th scope="row">Release Year</th>
                    <th scope="row">Publisher</th>
                    <th scope="row">Genre</th>
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