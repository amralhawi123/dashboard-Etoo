import React, { useState } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  

  const dataWeek = [
    { name: 'M', sales: 40, revenue: 24 },
    { name: 'T', sales: 30, revenue: 13 },
    { name: 'W', sales: 20, revenue: 98 },
    { name: 'T', sales: 27, revenue: 39 },
    { name: 'F', sales: 18, revenue: 48 },
    { name: 'S', sales: 23, revenue: 38 },
    { name: 'S', sales: 34, revenue: 43 },
  ];
  
  const dataYear = [
    { name: 'Jan', sales: 400, revenue: 240 },
    { name: 'Feb', sales: 300, revenue: 139 },
    { name: 'Mar', sales: 200, revenue: 980 },
    { name: 'Apr', sales: 278, revenue: 390 },
    { name: 'May', sales: 189, revenue: 480 },
    { name: 'Jun', sales: 239, revenue: 380 },
    { name: 'Jul', sales: 349, revenue: 430 },
    { name: 'Aug', sales: 400, revenue: 240 },
    { name: 'Sep', sales: 300, revenue: 139 },
    { name: 'Oct', sales: 200, revenue: 980 },
    { name: 'Nov', sales: 278, revenue: 390 },
    { name: 'Dec', sales: 189, revenue: 480 },
  ];
const Campaign = () => {
    const [timePeriod, setTimePeriod] = useState('week');

    const handleTimePeriodChange = (period) => {
      setTimePeriod(period);
    };
  
    const data = timePeriod === 'week' ? dataWeek : dataYear;
  
    return (
      <div className="chart-container" style={{marginTop:"10px", height:""}}>
        <div className='pb-3 mb-3 d-flex align-items-center justify-content-between' 
        style={{borderBottom:"1px solid #ddd"}}>
            <div className='left'>
            <h5 style={{marginBottom:"10px"}}>Campaign Visitors</h5>
            <p style={{fontSize:"13px", fontWeight:"500"}}>Last Campaign Performance</p>
            </div>
            <div className='right'>
            <p style={{fontSize:"25px", fontWeight:"500"}}>784k</p> 
                <p>
                <i class="fa-solid fa-arrow-trend-down" style={{color:"red"}}></i>
                 <span style={{color:"red"}}>-1.5%</span>
                </p>
            </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{
              top: 15, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default Campaign