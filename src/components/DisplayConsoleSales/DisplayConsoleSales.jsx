import { Chart } from "react-google-charts";
import React from 'react';


const DisplayConsoleSales = ({ toggle, games }) => {

  function generateDataForChart() {

    console.log(games);

    let gameList;
    if (toggle === false) {
      gameList = games.filter(game => game.year >= 2013)
    } else{
      gameList = games
     }

    let platforms = gameList.map(game => {
      return game.platform
    });

    let distinctPlatforms = [...new Set(platforms)]

    let platformArrays = distinctPlatforms.map(platform => {

      let allGamesForPlatform = gameList.filter(game => game.platform === platform);

      let globalSalesForPlatform = allGamesForPlatform.map(game => {
        return game.globalSales
      });

      let initialValue = 0;
      let sumWithInitial = globalSalesForPlatform.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue).toFixed(2);
      
      return [platform, parseFloat(sumWithInitial) , "blue"]
    });
    
    const data = [
        ["Platform", "Sales (in millions) since 2013", { role: "style" }],
        ...platformArrays
      ];
      
      return data;
    }
  
    return (
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
    ); 
}
 
export default DisplayConsoleSales;