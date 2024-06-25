
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const ChartAnalytics = () => {
  
  return (
    <div className='box' style={{ marginTop:"10px", width: '1100px', height: '380px' }}>
      <h5>Visitors Analytics</h5>
<BarChart
  series={[
    { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
    { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
    { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
    { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
    { data: [10, 6, 5, 8, 9], label: 'Series C1' },
  ]}
  style={{ width: '100%', height: '100%' }}
/>
        </div>
  );
}

export default ChartAnalytics