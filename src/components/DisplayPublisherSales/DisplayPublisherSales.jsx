import React from 'react';
import { Chart } from "react-google-charts";

//Figure out how to get only publishers with 200 or higher sales

const DisplayPublisherSales = ({ games }) => {

    function generatePublisherData() {

        let gamePublishers = games.map(game => {
            return game.publisher
        });

        let distinctPublishers = [...new Set(gamePublishers)]

        let publisherArrays = distinctPublishers.map(publisher => {

            let allGamesForPublisher = games.filter(game => game.publisher === publisher);

            let globalSalesForPublisher = allGamesForPublisher.map(game => {
                return game.globalSales
            });
            
            let initialValue = 0;
            let sumWithInitial = globalSalesForPublisher.reduce(
                (previousValue, currentValue) => previousValue + currentValue, initialValue).toFixed(2);

            return [publisher, parseFloat(sumWithInitial), "black"]
        });

        const data = [
            ["Publisher", "Sales", { role: "style" }],
            ...publisherArrays
        ];          
        return data;
    }

    return ( 
        <div>
            <h2>Global Sales Per Publisher</h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generatePublisherData()} />
        </div>
        
     );
}
 
export default DisplayPublisherSales;