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
import EditOfferHook from '../../hooks/Offers/edit-offer-hook';
import DeleteOfferHook from '../../hooks/Offers/delete-offer-hook';   
import AllOffersHook from '../../hooks/Offers/all-offer-hook';
import AddOfferHook from './../../hooks/Offers/add-offer-hook';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const OffersTable = () => {
    const [OnhandleClick, show, handleClose,handleShow ] = DeleteOfferHook()
    const [ handleEdit, showEdit,handleCloseEdit,handleShowEdit ] = EditOfferHook()
    const [ handleAdd, showAdd,handleCloseAdd,handleShowAdd,
      onChangOfferPrice,onChangOfferTitle,offerTitle,offerPrice,onImageChange
     ] = AddOfferHook()
    const [allOffers,pageCount,loading,head,handleOpen,totalnumberOffers,getPage,
      OnChangeShowNumber,showNumberOffers,showWord,OnChangeSearch
     ] = AllOffersHook()

    const navigate = useNavigate()
    const clickToShowOfferDetails = ()=>{
      navigate('/offer-product/id')
    }

      return (
        
        <TableContainer component={Paper} style={{marginTop:"10px"}}>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title><div> Create Offer  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
          <div className='edit-message'>
                <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Offer Title:-</p>
                <input type='text' placeholder='Offer title..' value={offerTitle} onChange={onChangOfferTitle}/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p>Offer Price:-</p>
                <input type='number' value={offerPrice} onChange={onChangOfferPrice} min={0} max={100} />
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Image:-</p>
                <input type='file' onChange={onImageChange} />
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
              <h5  >Offer</h5>
                <Button className='btn-add' onClick={handleShowAdd}>Add</Button>
             </div>
           <div className=' d-flex align-items-center justify-content-between'>
              <div className='show-number p-2 m-2 d-flex align-items-center'>
                  <p style={{marginRight:"10px"}}>Show</p>
                  <select name='number' id='numb' value={showNumberOffers} onChange={OnChangeShowNumber}>
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
                  onChange={OnChangeSearch} style={{
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
              allOffers.length > 0 ?
              allOffers.map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell ><p>{row.ID}</p> </TableCell>
                  <TableCell ><img style={{marginRight:"8px", width:"60px"}} src={row.Image} alt="brand1"/></TableCell>
                  <TableCell  ><p>{row["Offer Title"]}</p> </TableCell> 
                  <TableCell  ><p>{row["Offer Price"]}</p> </TableCell> 
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
                <p style={{marginRight:"10px"}}>Offer Title:-</p>
                <input type='text' placeholder='Product Name'/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Offer Price:-</p>
                <input type='text' placeholder='Product Description'/>
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Image:-</p>
                <input type='file'  />
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
                    <p onClick={clickToShowOfferDetails}><i class=" fa-solid fa-plus" style={{ marginRight:"8px"}}></i> Offers Products</p> 
                    <p onClick={()=>handleShowEdit(row.ID)}><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
                    <p onClick={()=>handleShow(row.ID)}><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
                  </div>
                  </div>
                   </TableCell>
                </TableRow>
              )) :<div class="no-data-container">
              <p class="no-data-message">There is No Data Found</p>
          </div>
            : <Spinner animation="border" variant="primary" className='m-3'/>}
            </TableBody>
          </Table>
          <div className='px-3 d-flex align-items-center justify-content-between'>
              <div>
                  <p>Showing 1 to {showNumberOffers} of {totalnumberOffers} entries</p>
              </div>
              <div>
          <Pagenation pageCount={pageCount} onPress={getPage}/>
              </div>
          </div>
          <ToastContainer/>
        </TableContainer>
      );
    }
export default OffersTable