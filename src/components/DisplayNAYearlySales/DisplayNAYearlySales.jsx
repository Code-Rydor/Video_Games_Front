import React from 'react';
import { Chart } from "react-google-charts";

const DisplayNAYearlySales = ({toggle, games}) => {

    function generateYearlySales() {

        let gameList;
        if (toggle === false) {
        gameList = games.filter(game => game.year >= 2010)
        } else{
        gameList = games
        };

        let years = gameList.map(game => {
            return game.year.toString()
        });

        let distinctYears = [...new Set(years)]

        let sortedYears = distinctYears.sort()

        let yearArrays = sortedYears.map(year => {

            let allGamesForYear = gameList.filter(game => game.year == year);

            let naSalesForYear = allGamesForYear.map(game => {
                return game.northAmericaSales
            });

            let initialValue = 0;
            let sumWithInitial = naSalesForYear.reduce(
                (previousValue, currentValue) => previousValue + currentValue, initialValue).toFixed(2);

            return [year, parseFloat(sumWithInitial), "black"]
        });
        
        const data = [
            ["Year", "Sales (in millions)", { role: "style" }],
            ...yearArrays
        ];
        return data;
    }

    return ( 
        <div>
            <h2>Yearly Sales In North America</h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateYearlySales()} />
        </div>      
    );
}
 
export default DisplayNAYearlySales;