import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import product1 from "../../../imgs/product-01.png"
import product2 from "../../../imgs/product-02.png"
import product3 from "../../../imgs/product-03.png"
import product4 from "../../../imgs/product-04.png" 

function createData(name,image, calories, fat, carbs, protein) {
  return { name, image,calories, fat, carbs, protein };
}

const rows = [
  createData(<img style={{marginRight:"8px", width:"60px"}} src={product1} alt="brand1"/>,'Apple Watch Series 7',"Electronics", "$269", 22, "$45"),
  createData(<img style={{marginRight:"8px", width:"60px"}} src={product2} alt="brand2"/>,'Macbook Pro M1',"Electronics", "$368", 54, "$36"),
  createData(<img style={{marginRight:"8px", width:"60px"}} src={product3} alt="brand3"/>,'Dell Inspiron 15',"Electronics", "$768", 34, "$64"),
  createData(<img style={{marginRight:"8px", width:"60px"}} src={product4} alt="brand4"/>,"HP Probook 450", "Electronics", "$456",20, "$64"),
];
const ProductsTable = () => {
    return (
        <TableContainer component={Paper} style={{marginTop:"10px"}}>
            <h5 style={{margin:"10px"}}>Top Products</h5>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead style={{backgroundColor: "#F7F9FC"}}>
              <TableRow>
                <TableCell className='fw-bold text-muted'>Product Name</TableCell>
                <TableCell align="right" className='fw-bold text-muted'>Category</TableCell>
                <TableCell align="right" className='fw-bold text-muted'>Price</TableCell>
                <TableCell align="right" className='fw-bold text-muted'>Sold</TableCell>
                <TableCell align="right" className='fw-bold text-muted'>Profit</TableCell>
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
                  <TableCell align="right"><p>{row.carbs}</p></TableCell>
                  <TableCell align="right" style={{color:"#8CA5E6"}}>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default ProductsTable