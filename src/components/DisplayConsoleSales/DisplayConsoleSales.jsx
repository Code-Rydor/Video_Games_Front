import { Chart } from "react-google-charts";
import React from 'react';


const DisplayConsoleSales = ({ games }) => {

  function generateDataForChart() {

    // console.log(games);

    let filteredGames = games.filter(game => game.year >= 2013)

    // console.log('Filtered Games', filteredGames)

    let platforms = filteredGames.map(game => {
      return game.platform
    });

    // console.log('Platforms', platforms)

    let distinctPlatforms = [...new Set(platforms)]

    // console.log('Distinct Platform', distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {

      let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
      
      // console.log("All games for platform:", allGamesForPlatform)

      let globalSalesForPlatform = allGamesForPlatform.map(game => {
        return game.globalSales
      });

      // console.log("Global Sales", globalSalesForPlatform)

      let initialValue = 0;
      let sumWithInitial = globalSalesForPlatform.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue).toFixed(2);// sumWithInitial returns a 16 digit decimal
                                                                                                // .toFixed(2) cuts number off at 2 decimals
      // console.log("Sum", sumWithInitial);
      
      return [platform, parseFloat(sumWithInitial) , "blue"]
    });

    // console.log("Platform Arrays", platformArrays)
    
    
    const data = [
        ["Platform", "Sales (in millions)", { role: "style" }],
        ...platformArrays
      ];
    
      // console.log("Data", data)
      
      return data;
    }
  
  
    return (
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
    );
  
}
 
export default DisplayConsoleSales;