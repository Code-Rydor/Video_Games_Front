import { Chart } from "react-google-charts";
import React from 'react';


const DisplayConsoleSales = ({ games }) => {

  function generateDataForChart() {

    console.log(games);

    let filteredGames = games.filter(game => game.year >= 2013)

    console.log('Filtered Games', filteredGames)

    let platforms = filteredGames.map(game => {
      return game.platform
    });

    console.log('Platforms', platforms)

    let distinctPlatforms = [...new Set(platforms)]

    console.log('Distinct Platform', distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {

      let allGamesForPlatform = filteredGames.filter(game => game.platform == platform);
      //22min 48secs in video

      return [platform, 10, "silver"]
    });

    console.log("Platform Arrays", platformArrays)

    
    const data = [
        ["Platform", "Sales", { role: "style" }],
        ...platformArrays
      ];
    
      console.log("Data", data)
      
      return data;
    }
  
  
    return (
      <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataForChart()} />
    );
  
}
 
export default DisplayConsoleSales;