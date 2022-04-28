const DisplaySearchedGames = ({ games, input }) => {
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
                {games
                    .filter(function (el) {
                        if (el.title.includes(`${input}`)){// || el.platform.includes(`${input}`) || el.release_year.includes(`${input}`) || el.publisher.includes(`${input}`) || el.genre.includes(`${input}`)) {
                            return true;
                        }
                    })
                    .map((game, index) => {
                        return (
                            <tr key={index}>
                                <td>{game.title}</td>
                                <td>{game.platform}</td>
                                <td>{game.release_year}</td>
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