import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);


const data = {
    // labels: ["total", "nominal", "real"],
    labels: ["Total Midwestern GDP", "State GDP (Nominal)"],
    datasets: [{
        data: [100, 50],
        backgroundColor: ['#059bff', ]
    }]
}


function Testchart() {
  return (
    <div>
        <Doughnut data={data}/>
    </div>
  )
}

export default Testchart