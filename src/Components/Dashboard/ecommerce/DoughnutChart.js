import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; 

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
    const [timeFrame, setTimeFrame] = useState('Monthly');

    const handleTimeFrameChange = (frame) => {
      setTimeFrame(frame);  
    };
  
    const data = {
      labels: ['Desktop', 'Mobile', 'Tablet', 'Unknown'],
      datasets: [
        {
          label: 'Visitors Analytics',
          data: [65, 45, 34, 12],
          backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'],
          hoverBackgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'],
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    };
  
    return (
        <div className="custom-chart-container" style={{marginTop:"10px"}}>
          <div className="custom-chart-header">
              <h5 >Visitors Analytics</h5>
            <div>
              <button className="custom-timeframe-button" onClick={() => handleTimeFrameChange('Weekly')}>Weekly</button>
              <button className="custom-timeframe-button" onClick={() => handleTimeFrameChange('Monthly')}>Monthly</button>
              <button className="custom-timeframe-button" onClick={() => handleTimeFrameChange('Yearly')}>Yearly</button>
            </div>
          </div>
          <div className="custom-doughnut-chart-wrapper">
            <Doughnut data={data} options={options} />
          </div>
          <div className="custom-chart-legend">
            <div>
            <div className="custom-legend-item">
              <span className="custom-legend-color" style={{ backgroundColor: '#3e95cd' }}></span>
              <span>Desktop</span>
              <span className="custom-legend-percentage">65%</span>
            </div>
            <div className="custom-legend-item">
              <span className="custom-legend-color" style={{ backgroundColor: '#8e5ea2' }}></span>
              <span>Tablet</span>
              <span className="custom-legend-percentage">34%</span>
            </div>
            </div>
            <div>
            <div className="custom-legend-item">
              <span className="custom-legend-color" style={{ backgroundColor: '#3cba9f' }}></span>
              <span>Mobile</span>
              <span className="custom-legend-percentage">45%</span>
            </div>
            <div className="custom-legend-item">
              <span className="custom-legend-color" style={{ backgroundColor: '#e8c3b9' }}></span>
              <span>Unknown</span>
              <span className="custom-legend-percentage">12%</span>
            </div>
            </div>
          </div>
        </div>
      );
}

export default DoughnutChart