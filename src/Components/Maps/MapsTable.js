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
import { useNavigate } from 'react-router-dom';
import AddMapsHook from '../../hooks/Maps/add-maps-hook';
import AllMapsHook from '../../hooks/Maps/all-maps-hook';
import DeleteMapsHook from './../../hooks/Maps/delete-maps-hook';
import { ToastContainer } from 'react-toastify';
import EditMapsHook from '../../hooks/Maps/edit-maps-hook';

const MapsTable = () => {
    const [OnhandleClick, show, handleClose,handleShow ] = DeleteMapsHook()
    const [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ,
      statesNameEdit, adminNameEdit,localityNameEdit,onChangStateNameEdit,
      onChangLocationNameEdit,onChangAdminNameEdit,allStatesEdit,allLocationsEdit,allAdminEdit
    ] = EditMapsHook()
    const [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,onChangAdminName,stateName,
      onChangStateName,locationName,onChangLocationName,adminName,allStates,allLocations,allAdminUnits
     ] = AddMapsHook()
    const [totalnumberMaps,head,handleOpen,pageCount,allMaps,loading,
      showNumberMaps,OnChangeShowNumber,getPage ] = AllMapsHook()

      return (
        <TableContainer component={Paper} style={{marginTop:"10px"}}>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title><div> Create Maps  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
          <div className='edit-message'>
          <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Stats Name:</p>
                <select name='status' id='status' value={stateName} onChange={onChangStateName}>
                <option>Select Stats Name</option>
                {
                  allStates ? 
                  allStates.map((state)=>(
                  <option id={state.ID}>{state.State_Name}</option>
                  )): <h6>There is no states</h6>
                }
                </select> 
                    </div>
          <div className='mt-2 d-flex align-items-center gap-2'>
                <p>location name:-</p>
                <select name='status' id='status' value={locationName} onChange={onChangLocationName}>
                <option>Select location name</option>
                {
                  allLocations ? 
                  allLocations.map((item)=>(
                  <option id={item.ID}>{item.Locality_Name}</option>
                  )): <h6>There is no states</h6>
                }
                </select> 
                    </div>
          <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Admin Unit Name:-</p>
                <select name='status' id='status' value={adminName} onChange={onChangAdminName}>
                <option>Select Admin Unit Name</option>
                {
                  allAdminUnits ? 
                  allAdminUnits.map((item)=>(
                  <option id={item.ID}>{item.Admin_Unit_Name}</option>
                  )): <h6>There is no states</h6>
                }
                </select> 
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
              <h5  >Maps</h5>
                <Button className='btn-add' onClick={handleShowAdd}>Add</Button>
             </div>
           <div className=' d-flex align-items-center justify-content-between'>
              <div className='show-number p-2 m-2 d-flex align-items-center'>
                  <p style={{marginRight:"10px"}}>Show</p>
                  <select name='number' id='numb' value={showNumberMaps} onChange={OnChangeShowNumber}>
                      <option>5</option>
                      <option>10</option>
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
              {
              loading === false ?
              allMaps.length > 0 ?
              allMaps.map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell ><p>{row.ID}</p> </TableCell>
                  <TableCell >{row.State_Name}</TableCell>
                  <TableCell  ><p>{row.Location_Name}</p> </TableCell> 
                  <TableCell  ><p>{row.Admin_Unit_Name}</p> </TableCell> 
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
            <Modal.Title><div> Update Maps </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
          <div className='edit-message'>
          <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Stats Name:</p>
                <select name='status' id='status' value={statesNameEdit} onChange={onChangStateNameEdit}>
                <option>{statesNameEdit}</option>
                {
                  allStatesEdit ? 
                  allStatesEdit.map((state)=>(
                  <option id={state.ID}>{state.State_Name}</option>
                  )): <h6>There is no states</h6>
                }
                </select> 
                    </div>
          <div className='mt-2 d-flex align-items-center gap-2'>
                <p>location name:-</p>
                <select name='status' id='status' value={localityNameEdit} onChange={onChangLocationNameEdit}>
                <option>{localityNameEdit}</option>
                {
                  allLocationsEdit ? 
                  allLocationsEdit.map((item)=>(
                  <option id={item.ID}>{item.Locality_Name}</option>
                  )): <h6>There is no states</h6>
                }
                </select> 
                    </div>
          <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Admin Unit Name:-</p>
                <select name='status' id='status' value={adminNameEdit} onChange={onChangAdminNameEdit}>
                <option>{adminNameEdit}</option>
                {
                  allAdminEdit ? 
                  allAdminEdit.map((item)=>(
                  <option id={item.ID}>{item.Admin_Unit_Name}</option>
                  )): <h6>There is no states</h6>
                }
                </select> 
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
              )) :
              <div class="no-data-container">
            <p class="no-data-message">There is No Data Found</p>
        </div>
            :<Spinner animation="border" variant="primary" className='m-3'/>}
            </TableBody>
          </Table>
          <div className='px-3 d-flex align-items-center justify-content-between'>
              <div>
                  <p>Showing 1 to {showNumberMaps} of {totalnumberMaps} entries</p>
              </div>
              <div>
          <Pagenation pageCount={pageCount} onPress={getPage}/>
              </div>
          </div>
          <ToastContainer/>
        </TableContainer>
      );
    }

export default MapsTable