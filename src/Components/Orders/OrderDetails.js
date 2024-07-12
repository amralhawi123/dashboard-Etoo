import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagenation from '../uitlity/Pagination';
import { Spinner } from 'react-bootstrap';
import { ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom';
import AllProductInOrderHook from '../../hooks/Orders/all-productIn-order-hook'; 

const OrderDetails = () => {
    const id = useParams()
    const [allOrderProducts,head,loading,showNumberProducts,OnChangeShowNumber,totalnumberProducts,pageCount,
        getPage
    ] = AllProductInOrderHook(id)  
    

  return (
    <TableContainer component={Paper} style={{marginTop:"10px"}}>
    <div style={{borderBottom:"1px solid #ddd", padding:"15px", marginBottom:"15px"}}>
    <h5  >Orders Details</h5>
   </div>
 <div className=' d-flex align-items-center justify-content-between'>
    <div className='show-number p-2 m-2 d-flex align-items-center'>
        <p style={{marginRight:"10px"}}>Show</p>
        <select name='number' id='numb' value={showNumberProducts} onChange={OnChangeShowNumber}>
            <option>2</option>
            <option>4</option>
            <option>6</option>
            <option>10</option>
        </select>
        <p style={{marginLeft:"10px"}}>entries</p>
    </div>
    <div className='search-table d-flex align-items-center'>
        <p style={{marginRight:"5px"}}>Search :</p>
        <input type='search' className='search-dark'
         style={{
            outline:"none",
            border:"1px solid #ddd",
            padding:"0 5px"
        }}/>
    </div>
 </div>
<Table sx={{ minWidth: 500 }} aria-label="simple table">
  <TableHead style={{backgroundColor: "#F7F9FC"}}>
      <TableRow>
    {
        head.map((item)=>(
      <TableCell className='fw-bold text-muted'>
        <div className='d-flex align-items-center gap-3'  >
        {item.name}
            <div className='d-flex align-items-center flex-column'>
            <i class="fa-solid fa-caret-up" style={{lineHeight: "0.5"}}></i>
            <i class="fa-solid fa-caret-down" style={{lineHeight: "0.5"}}></i>
            </div>
        </div>
      </TableCell>
        ))
    }
    </TableRow>
  </TableHead>
  <TableBody>
    {
      loading === false ?
      allOrderProducts.length > 0 ?
      allOrderProducts.map((row) => (
      <TableRow
        key={row.ID}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell ><p>{row.ID}</p> </TableCell>
        <TableCell ><p>{row.Order_ID} </p></TableCell> 
        <TableCell ><p>{row.Product_Name} </p></TableCell>
        <TableCell ><p>{row.Product_Price}</p> </TableCell>
        <TableCell ><img style={{marginRight:"8px", width:"60px"}} src={row.Image} alt="brand1"/></TableCell>
        <TableCell ><p>{row.Quantity}</p> </TableCell> 
      </TableRow>
    )) :
    <div class="no-data-container">
    <p class="no-data-message">There is No Data Found</p>
</div>
    : <Spinner animation="border" variant="primary" className='m-3'/>
    }
  </TableBody>
</Table>
<div className='px-3 d-flex align-items-center justify-content-between'>
    <div>
        <p>Showing 1 to {allOrderProducts.length} of {totalnumberProducts} entries</p>
    </div>
    <div>
<Pagenation pageCount={pageCount} onPress={getPage}/>
    </div>
</div>
<ToastContainer/>
</TableContainer>
  )
}

export default OrderDetails