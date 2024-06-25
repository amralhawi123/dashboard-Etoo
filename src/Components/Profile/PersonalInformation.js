import React from 'react'
import { Button } from 'react-bootstrap'

const PersonalInformation = () => {
  return (
    <div className='box mt-3' style={{textAlign:"right"}}>
            <div  style={{borderBottom:"1px solid #ddd", textAlign:"left", padding:"10px 8px 20px 8px", marginBottom:"10px"}}>
            <h6 >Personal Information</h6> 
            </div>
            <div className='edit-message m-3'>
                <div className='' style={{textAlign:"left"}}>
            <p style={{marginBottom:"5px"}}>Full Name</p>
                <input type='text' placeholder='Amr Alhawi' style={{width:"100%"}}/>
                    </div>
                <div className='mt-3  ' style={{textAlign:"left"}}>
            <p style={{marginBottom:"5px"}}>Phone Number</p>
                <input type='text' placeholder='01142903949' style={{width:"100%"}}/>
                    </div>
                <div className='mt-3  ' style={{textAlign:"left"}}>
            <p style={{marginBottom:"5px"}}>Email Address</p>
                <input type='email' placeholder='amor123@gmail.com' style={{width:"100%"}}/>
                    </div>
                <div className='mt-3  ' style={{textAlign:"left"}}>
            <p style={{marginBottom:"5px"}}>Username</p>
                <input type='text' placeholder='@amralhawi' style={{width:"100%"}}/>
                    </div>
                    <div className='mt-3 ' style={{textAlign:"left"}}>
            <p style={{marginBottom:"5px"}}>BIO</p>
                <textarea type='text' placeholder='Lorem ipsum dolor sit amet,' style={{height:"100px", width:"100%"}} />
                    </div>
              </div>
              <Button className='btn-add m-2' style={{width:"15%"}}>Cancle</Button>
            <Button variant="success" style={{width:"15%"}}>Save</Button>
    </div>
  )
}

export default PersonalInformation