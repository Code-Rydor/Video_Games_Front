import { Chart } from "react-google-charts";
import React from 'react';


const DisplayConsoleSales = ({ toggle, games }) => {

  function generateDataForChart() {

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
      
      return [platform, parseFloat(sumWithInitial) , "black"]
    });
    
    const data = [
        ["Platform", "Sales (in millions)", { role: "style" }],
        ...platformArrays
      ];      
      return data;
    }
  
  return (
    <div>
      <h2>Global Sales Per Console</h2>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
    </div>
    ); 
}
 
export default DisplayConsoleSales;