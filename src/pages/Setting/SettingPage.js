import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SettingPage = () => {
    return (
        <div className='p-2 box mt-5 mx-3'> 
            <div  
            style={{borderBottom:"1px solid #ddd", padding:"15px", marginBottom:"15px"}}>
            <h5  >Setting</h5> 
            </div>
            <div className='m-3 p-3'>
            <Container >
                <Row>
                    <Col  className='box m-2 py-4 px-3'>
                    <Link to='/welcome' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-envelope"></i>
                    <p style={{fontWeight:"500"}}>Welcome Page</p>
                    </Link>
                    </Col>
                    <Col  className='box m-2 py-4 px-3 '>
                    <Link to='/category' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-list"></i>
                    <p style={{fontWeight:"500"}}>Categories</p>
                    </Link>
                    </Col>
                    <Col className='box m-2 py-4 px-3 '>
                    <Link to='/about' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p style={{fontWeight:"500"}}>About</p>
                    </Link>
                    </Col>
                    <Col  className='box m-2 py-4 px-3'>
                    <Link to='/transportion' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-gauge-high"></i>
                    <p style={{fontWeight:"500"}}>TransPortion</p>
                    </Link> 
                    </Col>
                    </Row>
                    <Row> 
                    <Col lg={3} className='box m-2 py-4 px-3'>
                        <Link to='' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-user-shield"></i>
                    <p style={{fontWeight:"500"}}>term of service</p>
                    </Link>
                    </Col>
                    <Col lg={3} className='box m-2 py-4 px-3'>
                    <Link to='' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-paper-plane"></i>
                    <p style={{fontWeight:"500"}}>
                     Order Status</p>
                    </Link>
                    </Col>
                    <Col lg={3} className='box m-2 py-4 px-3'>
                    <Link to='' className='d-flex align-items-center gap-2'> 
                    <i class="fa-solid fa-coins"></i>
                    <p style={{fontWeight:"500"}}>Payment_method</p>
                    </Link>
                    </Col>
                </Row>
            </Container>
            </div>
          </div>
      )
}

export default SettingPage