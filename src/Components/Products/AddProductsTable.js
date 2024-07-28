import React  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagenation from '../uitlity/Pagination';
import { Button, Modal, Spinner } from 'react-bootstrap';      
import AllAddProductsHook from '../../hooks/Products/all-add-product-hook';
import { useParams } from 'react-router-dom';
import AddProductImageHook from '../../hooks/Products/add-image-product-hook';
import { ToastContainer } from 'react-toastify';
 

const AddProductsTable = () => {  
  const id = useParams()

    const [handleCloseAdd,handleShowAdd,handleAdd,onImageChange,showAdd] = AddProductImageHook(id)
    const [head ,product,loading] = AllAddProductsHook(id)
 
      return (
        
        <TableContainer component={Paper} style={{marginTop:"10px"}}>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title><div> Add Product Images  </div></Modal.Title>
          </Modal.Header> 
          <Modal.Body>
                <div className='edit-message'>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                <p style={{marginRight:"10px"}}>Image:-</p>
                <input type='file' onChange={onImageChange} multiple />
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
              <h5  >Add Product Images</h5>
                <Button className='btn-add' onClick={handleShowAdd}>Add</Button>
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
              {
                loading === false ?
                product ?
                  <TableRow
                  key={product.ID}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell ><p>{product.ID}</p> </TableCell>
                  <TableCell ><img style={{marginRight:"8px", width:"60px"}} src={product.Image} alt="brand1"/></TableCell>
                  </TableRow>
                 : <h6>There is no images</h6>
                  : 
            <Spinner animation="border" variant="primary" />
              }
            </TableBody>
          </Table>
          <div className='px-3 d-flex align-items-center justify-content-between'>
              <div>
                  <p>Showing 1 to 10 of 137 entries</p>
              </div>
              <div>
          <Pagenation />
              </div>
          </div>
          <ToastContainer/>
        </TableContainer>
      );
}

export default AddProductsTable