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
import { Button, Modal, Spinner } from 'react-bootstrap';
import DeleteOrderHook from '../../hooks/Orders/delete-order-hook';  
import EditOrderHook from '../../hooks/Orders/edit-order-hook';
import AllOrderHook from './../../hooks/Orders/all-order-hook';
import { ToastContainer } from "react-toastify";
import { Link } from 'react-router-dom';
import ViewOrderSerachHook from '../../hooks/Orders/view-order-search-hook';

const OrdersTable = () => {
  const [OnhandleClick, show, handleClose,handleShow ] = DeleteOrderHook()
  const [ handleEdit, showEdit,handleCloseEdit,handleShowEdit,status ,OnChangeStatus] = EditOrderHook()
  const [head,handleOpen,allOrders ,loading,pageCount,getPage,totalnumberOrders,
    showNumberOrders,OnChangeShowNumber,showWord,OnChangeSearch,loadingSearch
  ] = AllOrderHook()
  // const [showWord,OnChangeSearch] = ViewOrderSerachHook()

    return (
      
      <TableContainer component={Paper} style={{marginTop:"10px"}}>
            <div style={{borderBottom:"1px solid #ddd", padding:"15px", marginBottom:"15px"}}>
            <h5  >Orders</h5>
           </div>
         <div className=' d-flex align-items-center justify-content-between'>
            <div className='show-number p-2 m-2 d-flex align-items-center'>
                <p style={{marginRight:"10px"}}>Show</p>
                <select name='number' id='numb' value={showNumberOrders} onChange={OnChangeShowNumber}>
                    <option>5</option>
                    <option>10</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <p style={{marginLeft:"10px"}}>entries</p>
            </div>
            <div className='search-table d-flex align-items-center'>
                <p style={{marginRight:"5px"}}>Search :</p>
                <input type='search' className='search-dark'
                                  value={showWord}
                                  onChange={OnChangeSearch}
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
              loadingSearch === false ?
              loading === false ?
              allOrders.length > 0 ?
            allOrders.map((row) => (
              <TableRow
                key={row.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell ><p>{row.ID}</p> </TableCell>
                <TableCell ><p>{row["Client Name"]} </p></TableCell>
                <TableCell ><p>{row.Location}</p> </TableCell>
                <TableCell ><p>{row["Transportation Cost"]} </p></TableCell>
                <TableCell ><p>{row.Landmark}</p> </TableCell>
                <TableCell ><p>{row["Order Status"]}</p> </TableCell>
                <TableCell ><p>{row["Delivery Boy"]}</p> </TableCell>
                <TableCell ><p>{row.Date} </p></TableCell> 
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
                <select name='status' id='status' value={status} onChange={OnChangeStatus}>
                    <option id='1'>Open</option>
                    <option id='2'>In Progress</option>
                    <option id='3'>Completed</option>
                    <option id='4'>Delivery</option>
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
              <i class='fa-solid fa-ellipsis icon-box' onClick={()=>handleOpen(row.ID)}></i>
              <div className='box-edit' id={row.ID} style={{zIndex:"100"}}>
                <Link to={`/orders/orderdetails/${row.ID}`}>
                  <p><i class=" fa-solid fa-plus" style={{ marginRight:"8px"}}></i> Order Details</p> 
                </Link>
                  <p onClick={()=>handleShowEdit(row.ID)}><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
                  <p onClick={()=>handleShow(row.ID)}><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
                </div>
                </div>
                 </TableCell>
              </TableRow>
            )) :<div>There is no data found</div>
            : <Spinner animation="border" variant="primary" className='m-3'/> :
            <Spinner animation="border" variant="primary" className='m-3'/>
            }
          </TableBody>
        </Table>
        <div className='px-3 d-flex align-items-center justify-content-between'>
            <div>
                <p>Showing 1 to {allOrders.length} of {totalnumberOrders} entries</p>
            </div>
            <div>
        <Pagenation pageCount={pageCount} onPress={getPage}/>
            </div>
        </div>
        <ToastContainer/>
      </TableContainer>
    );
}

export default OrdersTable