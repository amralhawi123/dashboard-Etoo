import React from 'react'
import { Button } from 'react-bootstrap'
import user from '../../imgs/user-01.png'

const YourPhoto = () => {
    return (
        <div className='box mt-3' style={{textAlign:"right"}}>
                <div  style={{borderBottom:"1px solid #ddd", textAlign:"left", padding:"10px 8px 20px 8px", marginBottom:"10px"}}>
                <h6 >Your Photo</h6> 
                </div>
                <div className='mt-4 p-2'>
                    <div className='d-flex align-items-center'>
                    <img src={user} alt='user' style={{marginRight:"20px",width:"70px"}}/>
                    <div className=''>
                        <h6>Edit your Profile</h6>
                        <div className='d-flex align-items-center gap-2' style={{fontSize:"14px"}}>
                        <p>Delete</p>
                        <p>Update</p>
                        </div>
                    </div>
                    </div>
                    <div className='mt-4'>
                        <input type='file' alt='profile'/>
                    </div>
                </div>
                  <Button className='btn-add m-2' style={{width:"15%"}}>Cancle</Button>
                <Button variant="success" style={{width:"15%"}}>Save</Button>
        </div>
      )
}

export default YourPhoto