import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const data = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Total Revenue',
      data: [20, 30, 25, 35, 50, 45, 55, 60, 50, 40, 45, 50],
      borderColor: '#3e95cd',
      fill: true,
    },
    {
      label: 'Total Sales',
      data: [25, 35, 30, 40, 55, 50, 60, 65, 55, 45, 50, 55],
      borderColor: '#8e5ea2',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const LineCharts = () => {
  const [timeFrame, setTimeFrame] = useState('Month');

  const handleTimeFrameChange = (frame) => {
    setTimeFrame(frame); 
  };

  return (
    <div className="lineCart-style" style={{ backgroundColor: 'white', 
    padding: '20px', borderRadius: '8px',
     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginTop:"10px"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <span style={{ color: '#3e95cd', fontWeight: 'bold' }}>Total Revenue</span> | <span style={{ color: '#8e5ea2', fontWeight: 'bold' }}>Total Sales</span>
        </div>
        <div className='d-flex'>
          <button className="timeframe-button" onClick={() => handleTimeFrameChange('Day')}>Day</button>
          <button className="timeframe-button" onClick={() => handleTimeFrameChange('Week')}>Week</button>
          <button className="timeframe-button" onClick={() => handleTimeFrameChange('Month')}>Month</button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineCharts