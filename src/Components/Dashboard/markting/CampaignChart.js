import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import edit from '../../../imgs/edit.png';
import dlete from '../../../imgs/delete.png';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [
    {
      label: 'Campaign 1',
      data: [200, 250, 180, 220, 210, 230, 200, 240, 220, 190, 180, 170],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Campaign 2',
      data: [180, 230, 200, 250, 190, 210, 180, 220, 210, 200, 160, 150],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};
const CampaignChart = () => {
    const [show,setShow]=useState('')

    const handleOpenChanle =() => {
      show === "d-block"?setShow(''):
      setShow("d-block")
    }
      // Attach event listener to document to hide menus when clicking anywhere
  document.addEventListener('click', function(event) {
    const isIcon = event.target.classList.contains('icon-box');
    if (!isIcon) {
        setShow('')
    }
});
    return (
     <div className='box'>
            <div className=' d-flex align-items-center justify-content-between'>
            <h5 style={{margin:"10px"}}>Top Channels</h5>
      <div style={{position:"relative"}}>
          <i class=" fa-solid fa-ellipsis icon-box" onClick={handleOpenChanle}></i>
          <div className={`${show} box-edit`}>
              <p><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
              <p><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
            </div>
            </div>
      </div>
      <div className='p-2 d-flex align-items-center '>
        <div className='d-flex align-items-center '>
        <p style={{fontSize:"30px", fontWeight:"500", marginRight:"10px"}}>$560.93</p> 
        <i class="fa-solid fa-arrow-trend-up" style={{color:"#21C0A1"}}></i> <span style={{color:"#21C0A1"}}>+2.5%</span>
        </div>
        <p style={{fontSize:"13px", fontWeight:"500"}}>Average cost per interaction</p>
      </div>
        <Line data={data} options={options} />;
     </div>   
    )
}

export default CampaignChart