import React, { useState } from 'react';
import edit from '../../../imgs/edit.png';
import dlete from '../../../imgs/delete.png';

function createData(id,url, views,uniques) {
    return {id, url, views,uniques };
  }
  
  const data = [
    createData(1,"/","2.5k","2.1k"),
    createData(2,'/blog/',"376","139"),
    createData(3,'/reserve/success',"346", "239"),
    createData(4,'/product/product-details',"465", "198"),
    createData(5,'/blog/digital-marketing',"240", "150"),
  ];

const TopContentAnalytics = () => {

  const [show,setShow]=useState('')

  const handleOpenContent =() => {
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
    <div className='box p-4 top-content'>
        <div className='p-relative d-flex align-items-center justify-content-between'>
        <h5 style={{marginBottom:"10px"}}>Top Content</h5>
        <div style={{position:"relative"}}>
        <i class=" fa-solid fa-ellipsis icon-box" onClick={handleOpenContent}></i>
        <div className={`${show} box-edit`} style={{zIndex:"100"}}>
            <p><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
            <p><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
          </div>
          </div>
        </div>
        <div className='mt-3'>
            <div className='d-flex align-items-center justify-content-between'>
                <p style={{width:"200px"}}>URL</p>
                <p>Views</p>
                <p>Uniques</p>
            </div>
            <div className='mt-3'>
                {
                    data.map((item)=>(
                <p key={item.id} className='mt-3 d-flex align-items-center justify-content-between'>
                <span className={`back-span span-${item.id}`} style={{width:"200px",padding:"2px 10px",position:"relative"}}>{item.url}</span>
                <span  style={{color:"#21C0A1"}} >{item.views}</span>
                <span >{item.uniques}</span>
                </p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopContentAnalytics