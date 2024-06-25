import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import edit from '../../imgs/edit.png';
import dlete from '../../imgs/delete.png'; 
import Pagenation from '../uitlity/Pagination';
import { Button, Modal } from 'react-bootstrap';
import DeleteOrderHook from '../../hooks/Orders/delete-order-hook';  
import EditOrderHook from '../../hooks/Orders/edit-order-hook';
import AllOrderHook from './../../hooks/Orders/all-date-hook';


const OrdersTable = () => {
  const [OnhandleClick, show, handleClose,handleShow ] = DeleteOrderHook()
  const [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ] = EditOrderHook()
  const [rows,head,handleOpen ] = AllOrderHook()

    return (
      
      <TableContainer component={Paper} style={{marginTop:"10px"}}>
            <div style={{borderBottom:"1px solid #ddd", padding:"15px", marginBottom:"15px"}}>
            <h5  >Orders</h5>
           </div>
         <div className=' d-flex align-items-center justify-content-between'>
            <div className='show-number p-2 m-2 d-flex align-items-center'>
                <p style={{marginRight:"10px"}}>Show</p>
                <select name='number' id='numb'>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <p style={{marginLeft:"10px"}}>entries</p>
            </div>
            <div className='search-table d-flex align-items-center'>
                <p style={{marginRight:"5px"}}>Search :</p>
                <input type='search' className='search-dark' style={{
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
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell ><p>{row.id}</p> </TableCell>
                <TableCell ><p>{row.name} </p></TableCell>
                <TableCell ><p>{row.address}</p> </TableCell>
                <TableCell ><p>{row.cost} </p></TableCell>
                <TableCell ><p>{row.mark}</p> </TableCell>
                <TableCell ><p>{row.status}</p> </TableCell>
                <TableCell ><p>{row.boys}</p> </TableCell>
                <TableCell ><p>{row.date} </p></TableCell>
                <TableCell ><p>{row.note}</p> </TableCell>
                <TableCell >
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><div className='font'>Confirm deletion</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='font'>Do you definitely want to delete?</div></Modal.Body>
        <Modal.Footer>
          <Button className='font' variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button className='font' variant="danger" onClick={OnhandleClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title><div> Update Order  </div></Modal.Title>
        </Modal.Header> 
        <div style={{borderBottom:"1px solid #ddd", padding:"15px", marginBottom:"15px"}}>
            <h5  >Update Order</h5>
           </div>
        <Modal.Body>
              <div className='show-status d-flex align-items-center'>
              <p style={{marginRight:"10px"}}>Order Status</p>
                <select name='status' id='status'>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Delivery</option>
                </select> 
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="danger" onClick={handleEdit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
                <div style={{position:"relative"}}>
              <i class='fa-solid fa-ellipsis icon-box' onClick={()=>handleOpen(row.id)}></i>
              <div className='box-edit' id={row.id} style={{zIndex:"100"}}>
                  <p><i class=" fa-solid fa-plus" style={{ marginRight:"8px"}}></i> Order Details</p> 
                  <p onClick={handleShowEdit}><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
                  <p onClick={handleShow}><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
                </div>
                </div>
                 </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='px-3 d-flex align-items-center justify-content-between'>
            <div>
                <p>Showing 1 to 10 of 137 entries</p>
            </div>
            <div>
        <Pagenation pageCount={rows.length}/>
            </div>
        </div>
      </TableContainer>
    );
}

export default OrdersTable