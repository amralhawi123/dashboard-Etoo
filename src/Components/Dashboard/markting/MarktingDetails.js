import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MarktingDetails = () => {
  return (
    <div className='order-details'>
    <Container>
      <Row>
        <Col xs={12} sm={6} lg={4}>
        <div className='box box-orders'>
            <div className='top'> 
                <i class="fa-solid fa-eye"></i>
            </div>
            <div className='midddle'>
                <p style={{fontSize:"15px", fontWeight:"100"}}>Avg. Client Rating</p>
                <p style={{fontSize:"25px", fontWeight:"500"}}>7.8/10</p> 
            </div>
            <div className='bottom'> 
            <p><i class="fa-solid fa-arrow-trend-up" style={{color:"#21C0A1"}}></i> <span style={{color:"#21C0A1"}}>+2.5%</span> than last Week</p>
            </div>
        </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
        <div className='box box-orders'>
            <div className='top'> 
                <i class="fa-solid fa-users"></i>
            </div>
            <div className='midddle'>
                <p style={{fontSize:"15px", fontWeight:"100"}}>Instagram Followers</p>
                <p style={{fontSize:"25px", fontWeight:"500"}}>7.8/10</p> 
            </div>
            <div className='bottom'> 
            <p>
                <i class="fa-solid fa-arrow-trend-down" style={{color:"red"}}></i> <span style={{color:"red"}}>-1.5%</span> than last Week
                </p>
            </div>
        </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
        <div className='box box-orders'>
            <div className='top'> 
                <i class="fa-solid fa-database"></i>
            </div>
            <div className='midddle'>
                <p style={{fontSize:"15px", fontWeight:"100"}}>Avg. Client Rating</p>
                <p style={{fontSize:"25px", fontWeight:"500"}}>$5.03</p> 
            </div>
            <div className='bottom'> 
            <p><i class="fa-solid fa-arrow-trend-up" style={{color:"#21C0A1"}}></i> <span style={{color:"#21C0A1"}}>+2.6%</span> than last Week</p>
            </div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default MarktingDetails