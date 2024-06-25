import React from 'react'
import { Button } from 'react-bootstrap'

const AboutContent = () => {
  return (
    <div className='box m-3 p-2' style={{textAlign:"right"}}>
                      <div  
              style={{borderBottom:"1px solid #ddd",textAlign:"left", padding:"15px", marginBottom:"15px"}}>
              <h5 > <i class="fa-solid fa-circle-exclamation"></i> About</h5> 
             </div>
           <div className='edit-message m-3 p-2'>
                <div className='  d-flex align-items-center gap-2'>
                <p style={{marginRight:"20px"}}>Stor Name:-</p>
                <input type='text' placeholder='Stor Name'/>
                    </div>
                <div className='mt-4 d-flex align-items-center gap-2'>
                <p style={{marginRight:"20px"}}>About Company:-</p>
                <textarea type='text' placeholder='About Company'/>
                    </div>
                <div className='mt-4 d-flex align-items-center gap-2'>
                <p style={{marginRight:"20px"}}>Phone:-</p>
                <input type='text' placeholder='phone'/>
                    </div>
                <div className='mt-4 d-flex align-items-center gap-2'>
                <p style={{marginRight:"20px"}}>watsap phone:-</p>
                <input type='text' placeholder='watsap phone'/>
                    </div>
                    <div className='mt-4 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Image:-</p>
                <input type='file'  />
                    </div>
              </div>
              <Button className='btn-add m-2' style={{width:"15%"}}>Save</Button>  
    </div>
  )
}

export default AboutContent