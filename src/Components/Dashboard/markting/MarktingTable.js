import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import brand1 from "../../../imgs/brand-01.svg"
import brand2 from "../../../imgs/brand-02.svg" 
import brand4 from "../../../imgs/brand-04.svg"
import brand5 from "../../../imgs/brand-05.svg"
import brand6 from "../../../imgs/brand-06.svg"
import edit from '../../../imgs/edit.png';
import dlete from '../../../imgs/delete.png';

function createData(name,image, calories, fat, protein) {
  return { name, image,calories, fat, protein };
}

const rows = [
  createData(<img style={{marginRight:"8px"}} src={brand1} alt="brand1"/>,'Google',"3.5K", "$2,768", 390, "4.8%"),
  createData(<img style={{marginRight:"8px"}} src={brand2} alt="brand2"/>,'Twitter',"2.5K", "$3,768", 540, "4.3%"),
  createData(<img style={{marginRight:"8px"}} src={brand6} alt="brand6"/>,'Youtube',"1.5K", "$1,768", 340, "2.8%"),
  createData(<img style={{marginRight:"8px"}} src={brand4} alt="brand4"/>,'Vimeo',"3.5K", "$3,768", 230, "3.4%"),
  createData(<img style={{marginRight:"8px"}} src={brand5} alt="brand5"/>,'Facebook',"1.5K", "$4,768", 430, "2.8%"),
];
const MarktingTable = () => {
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
      
      <TableContainer component={Paper} style={{marginTop:"10px"}}>
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
         
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead style={{backgroundColor: "#F7F9FC"}}>
            <TableRow>
              <TableCell className='fw-bold text-muted'>SOURCE</TableCell>
              <TableCell align="right" className='fw-bold text-muted'>VISITORS</TableCell>
              <TableCell align="right" className='fw-bold text-muted'>REVENUES</TableCell> 
              <TableCell align="right" className='fw-bold text-muted'>CONVERSION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                {row.image}
                </TableCell>
                <TableCell align="right"><p>{row.calories}</p></TableCell>
                <TableCell align="right" style={{color:"#21C0A1"}}>{row.fat}</TableCell> 
                <TableCell align="right" style={{color:"#8CA5E6"}}>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default MarktingTable