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
import DeleteMessageHook from '../../hooks/Messages/delete-message-hook';
import EditMessageHook from '../../hooks/Messages/edit-message-hook'; 
import AllMessageHook from '../../hooks/Messages/all-massage-hook'; 
import AddMessageHook from '../../hooks/Messages/add-message-hook';
import { ToastContainer } from "react-toastify";
import AllClientsHook from '../../hooks/User Mangement/all-clients-hook';

const MessageDetails = () => {
    const [OnhandleClick, show, handleClose,handleShow ] = DeleteMessageHook()
    const [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ,
      onChangTitleEdit,titleEdit,onChangNotificationEdit,notificationsEdit,
      onChangClientSelectEdit,clientSelectEdit
    ] = EditMessageHook()
    const [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,notifications,clientSelect,title,
      onChangTitle,onChangClientSelect,onChangNotification
     ] = AddMessageHook()
    const [head,handleOpen,allMessages ,totalnumberMessages,pageCount,getPage,loading,
      showNumberMessages,OnChangeShowNumber,OnChangeSearch,showWord,loadingSearch
    ] = AllMessageHook()
    const [allClients] = AllClientsHook()

      return (
        
        <TableContainer component={Paper} style={{marginTop:"10px"}}>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title><div> Notifications  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
                <div className='edit-message'>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Title:-</p>
                <input type='text' placeholder='title' value={title} onChange={onChangTitle}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Users:-</p>
                <select name='status' id='status' value={clientSelect} onChange={onChangClientSelect}>
                <option>Select User</option>
                  {
                    allClients ? 
                    allClients.map((clinet)=>(
                      <option id={clinet.ID}>{clinet.Name}</option> 
                    )) : <h5>There is no clients found</h5>
                  }
                </select> 
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Notifications:-</p>
                <textarea value={notifications} onChange={onChangNotification} placeholder='Enter your notification'/>
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
              <h5  >Notifications</h5>
                <Button className='btn-add' onClick={handleShowAdd}>Add</Button>
             </div>
           <div className=' d-flex align-items-center justify-content-between'>
              <div className='show-number p-2 m-2 d-flex align-items-center'>
                  <p style={{marginRight:"10px"}}>Show</p>
                  <select name='number' id='numb'value={showNumberMessages} onChange={OnChangeShowNumber} >
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
              allMessages.length > 0 ?
              allMessages.map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell ><p>{row.ID}</p> </TableCell>
                  <TableCell ><p>{row.Notification} </p></TableCell>
                  <TableCell width={300}><p>{row.Title}</p> </TableCell>
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
            <Modal.Title><div> Update Notifications  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
                <div className='edit-message'>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Title:-</p>
                <input type='text' placeholder='title' value={titleEdit} onChange={onChangTitleEdit}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Users:-</p>
                <select name='status' id='status' value={clientSelectEdit} onChange={onChangClientSelectEdit}>
                <option>Select User</option>
                  {
                    allClients ? 
                    allClients.map((clinet)=>(
                      <option id={clinet.ID}>{clinet.Name}</option> 
                    )) : <h5>There is no clients found</h5>
                  }
                </select> 
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Notifications:-</p>
                <textarea value={notificationsEdit} onChange={onChangNotificationEdit}/>
                    </div>
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
                    <p onClick={()=>handleShowEdit(row.ID)}><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
                    <p onClick={()=>handleShow(row.ID)}><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
                  </div>
                  </div>
                   </TableCell>
                </TableRow>
              )) :     <div class="no-data-container">
              <p class="no-data-message">There is No Data Found</p>
          </div>
              :<Spinner animation="border" variant="primary" className='m-3'/>
              :<Spinner animation="border" variant="primary" className='m-3'/>
            }
            </TableBody>
          </Table>
          <div className='px-3 d-flex align-items-center justify-content-between'>
              <div>
                  <p>Showing 1 to {allMessages.length} of {totalnumberMessages} entries</p>
              </div>
              <div>
          <Pagenation pageCount={pageCount} onPress={getPage}/>
              </div>
          </div>
          <ToastContainer/>
        </TableContainer>
      );
}

export default MessageDetails