import React from 'react';
import {styled} from 'styled-components';
import {Doughnut, Bar} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);



// ? Styled Component
const PaperDiv = styled.div `
    background-color: white;
    width: 50%;
`



 // ? Chart Data
 const pieData = {
    // labels: ["total", "nominal", "real"],
    labels: ["Total Midwestern GDP", "State GDP (Nominal)"],
    datasets: [{
        data: [sumGDPTotal, stateGDP],
        backgroundColor: ['#aaaaaa', stateColor]
    }]
  }
  
  
  
  
  const incomeData = {
    // labels: ["total", "nominal", "real"],
    labels: ["Average Midwestern GDP/capita", "State GDP/capita (Nominal)", "National GDP/capita"],
    datasets: [
      {
        // label: ['Midwest Average, State, National Average'],
        data: [averageGDPCapita, stateCapita, 66144],
        backgroundColor: ['#aaaaaa', stateColor, '#c06014']
    },
  ]
  }
  
  
  const totalOptions = {
  responsive: true,
  plugins: {
  title: {
    display: true,
    text: 'GDP (in $ billions)'
  }
  }
  }
  
  
  const capitaOptions = {
  responsive: true,
  plugins: {
  legend: {
    display: false
  },
  title: {
    display: true,
    text: 'GDP/capita ($)'
  }
  }
  }
  
  


function StateCharts() {
  return (
    <div>
        <Doughnut data={pieData} options={totalOptions}/>
    </div>
  )
}



function StateCharts2() {
  return (
    <div>
        <Doughnut data={pieData} options={totalOptions}/>
    </div>
  )
}

export default StateCharts