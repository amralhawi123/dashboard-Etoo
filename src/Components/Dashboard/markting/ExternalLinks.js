import React, { useState } from 'react'
import edit from '../../../imgs/edit.png';
import dlete from '../../../imgs/delete.png';
import brand1 from "../../../imgs/brand-01.svg"
import brand2 from "../../../imgs/brand-02.svg" 
import brand4 from "../../../imgs/brand-04.svg" 
import brand3 from "../../../imgs/brand-03.svg"

function createData(id,logo, name,link) {
    return {id, logo, name,link };
  }
  
  const data = [
    createData(1,<img style={{marginRight:"8px"}} src={brand1} alt="brand1"/>,"Google",<i class="fa-solid fa-arrow-up-right-from-square"></i>),
    createData(2,<img style={{marginRight:"8px"}} src={brand2} alt="brand2"/>,'Github',<i class="fa-solid fa-arrow-up-right-from-square"></i>),
    createData(3,<img style={{marginRight:"8px"}} src={brand3} alt="brand6"/>,'Producthunt',<i class="fa-solid fa-arrow-up-right-from-square"></i>),
    createData(4,<img style={{marginRight:"8px"}} src={brand4} alt="brand4"/>,'Facebook',<i class="fa-solid fa-arrow-up-right-from-square"></i>), 
  ];

const ExternalLinks = () => {
    const [show,setShow]=useState('')

    const handleOpen =() => {
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
      <div className="box" style={{marginTop:"10px", height:"100%"}}>
        <div className='pb-3 mb-3 d-flex align-items-center justify-content-between' 
        style={{borderBottom:"1px solid #ddd"}}>
            <div className='left'>
            <h5 style={{marginBottom:"10px"}}>External Links</h5>
            <p style={{fontSize:"13px", fontWeight:"500"}}>Most used resources</p>
            </div>
            <div style={{position:"relative"}}>
        <i class=" fa-solid fa-ellipsis icon-box" onClick={handleOpen}></i>
        <div className={`${show} box-edit`}>
            <p><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
            <p><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
          </div>
          </div>
        </div>
        <div>
        {
                data.map((item)=>(
            <div key={item.id} className='dev-link px-2 mt-3 d-flex align-items-center justify-content-between'
            >
                <div>
                    {item.logo}
                    {item.name}
                </div>
                <div className=''> 
                    {item.link}
                </div>
            </div>
                ))
            }
        </div>
      </div>
    );
}

export default ExternalLinks