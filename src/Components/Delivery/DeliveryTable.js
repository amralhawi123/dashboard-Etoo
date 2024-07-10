import React  from 'react';
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
import DeleteDeliveryHook from '../../hooks/Delivery/delete-delivery-hook';
import EditDeliveryHook from '../../hooks/Delivery/edit-delivery-hook';
import AddDeliveryHook from '../../hooks/Delivery/add-delivery-hook';
import AllDeliveryHook from '../../hooks/Delivery/all-delivery-hook';
import { ToastContainer } from "react-toastify";

const DeliveryTable = () => {
    const [OnhandleClick, show, handleClose,handleShow ] = DeleteDeliveryHook()
    const [ handleEdit, showEdit,handleCloseEdit,handleShowEdit,nameEdit,transTypeEdit,phoneEdit,noteEdit,
      onChangNameEdit,onChangTransTypeEdit,onChangPhoneEdit,onChangNoteEdit,onImageChangeEdit ] = EditDeliveryHook()
    const [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,name,transType,phone,note,
      onChangName,onChangTransType,onChangPhone,onChangNote,onChangImage
     ] = AddDeliveryHook()
    const [head,handleOpen,pageCount,allDelivery,getPage,showNumber,OnChangeShowNumber,numberEnteris,loading ] = AllDeliveryHook()

      return (
        
        <TableContainer component={Paper} style={{marginTop:"10px"}}>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title><div> Add  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
          <div className='edit-message'>
                <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Name:-</p>
                <input type='text' placeholder='Product Name' value={name} onChange={onChangName}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Phone:-</p>
                <input type='text' placeholder='Product Description' value={phone} onChange={onChangPhone}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Note:-</p>
                <input type='text' placeholder='Product Description' value={note} onChange={onChangNote}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Transportation Type:-</p>
                <select name='status' id='status' value={transType} onChange={onChangTransType}>
                <option>Select Transportion type</option>
                    <option>car</option>
                    <option>bus</option>
                    <option>taxi</option> 
                </select> 
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Image:-</p>
                <input type='file' onChange={onChangImage} />
                    </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseAdd}>
              Close
            </Button>
            <Button variant="danger" onClick={handleAdd}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
              <div 
              className='d-flex align-items-center justify-content-between'
              style={{borderBottom:"1px solid #ddd", padding:"15px", marginBottom:"15px"}}>
              <h5  >Delivery Boys</h5>
                <Button className='btn-add' onClick={handleShowAdd}>Add</Button>
             </div>
           <div className=' d-flex align-items-center justify-content-between'>
              <div className='show-number p-2 m-2 d-flex align-items-center'>
                  <p style={{marginRight:"10px"}}>Show</p>
                  <select name='number' id='numb' value={showNumber} onChange={OnChangeShowNumber}>
                      <option>5</option>
                      <option>10</option>
                      <option>20</option>
                      <option>30</option>
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
              {
                loading === false ?
                allDelivery.length > 0 ? 
              allDelivery.map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell ><p>{row.ID}</p> </TableCell>
                  <TableCell ><img style={{marginRight:"8px", width:"60px"}} src={row.Image} alt="brand1"/></TableCell>
                  <TableCell  ><p>{row.Name}</p> </TableCell> 
                  <TableCell  ><p>{row.Phone}</p> </TableCell> 
                  <TableCell  ><p>{row.Transportation_type}</p> </TableCell> 
                  <TableCell  ><p>{row.Note}</p> </TableCell> 
                  <TableCell  >
                  <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><div className='font'>Delete Item</div></Modal.Title>
          </Modal.Header>
          <Modal.Body><div className='font'>Do you want to delete this itme!</div></Modal.Body>
          <Modal.Footer>
            <Button className='font' variant="dark" onClick={handleClose}>
              Cancle
            </Button>
            <Button className='font' variant="danger" onClick={OnhandleClick}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title><div> Update  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
          <div className='edit-message'>
                <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Name:-</p>
                <input type='text' placeholder='Product Name' value={nameEdit} onChange={onChangNameEdit}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Phone:-</p>
                <input type='text' placeholder='Product Description' value={phoneEdit} onChange={onChangPhoneEdit}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Note:-</p>
                <input type='text' placeholder='Product Description' value={noteEdit} onChange={onChangNoteEdit}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Transportation Type:-</p>
                <select name='status' id='status' value={transTypeEdit} onChange={onChangTransTypeEdit}>
                    <option>Select Transportion type</option>
                    <option>car</option>
                    <option>bus</option>
                    <option>taxi</option> 
                </select> 
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Image:-</p>
                <input type='file'  onChange={onImageChangeEdit}/>
                    </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseEdit}>
              Close
            </Button>
            <Button variant="danger" onClick={()=>handleEdit(row.ID)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
                  <div style={{position:"relative"}}>
                <i class='fa-solid fa-ellipsis icon-box' onClick={()=>handleOpen(row.ID)}></i>
                <div className='box-edit' id={row.ID} style={{zIndex:"100"}}>   
                    <p onClick={()=>handleShowEdit(row.ID)}><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
                    <p onClick={()=>handleShow(row.ID)}><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
                  </div>
                  </div>
                   </TableCell>
                </TableRow>
              )) : <div>There is no data found</div>
            : <Spinner animation="border" variant="primary" className='m-3'/>}
            </TableBody>
          </Table>
          <div className='px-3 d-flex align-items-center justify-content-between'>
              <div>
                  <p>Showing 1 to {showNumber} of {numberEnteris} entries</p>
              </div>
              <div>
          <Pagenation pageCount={pageCount} onPress={getPage}/>
              </div>
          </div>
          <ToastContainer/>
        </TableContainer> 
      );
    }

export default DeliveryTable