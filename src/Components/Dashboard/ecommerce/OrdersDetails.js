import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OrdersDetails = () => {
  return (
    <div className='order-details'>
    <Container>
      <Row>
        <Col xs={12} sm={6} lg={4} xl={3}>
        <div className='box box-orders'>
            <div className='top'> 
                <i class="fa-solid fa-eye"></i>
            </div>
            <div className='midddle'>
                <p>$3.456K</p> 
            </div>
            <div className='bottom'>
            <p>Total views</p> 
            <p>0.43% <i class="fa-solid fa-arrow-up"></i></p>
            </div>
        </div>
        </Col>
        <Col xs={12} sm={6} lg={4} xl={3}>
        <div className='box box-orders'>
            <div className='top'> 
            <i class="fa-solid fa-cart-shopping"style={{color: "#28a745"}}></i> 
            </div>
            <div className='midddle'>
                <p>$45,2K</p> 
            </div>
            <div className='bottom'>
            <p>Total Profit</p> 
            <p>4.35% <i class="fa-solid fa-arrow-up"></i></p>
            </div>
        </div>
        </Col>
        <Col xs={12} sm={6} lg={4} xl={3}>
        <div className='box box-orders'>
            <div className='top'> 
            <i class="fa-solid fa-bezier-curve" style={{color: "#fd5353"}}></i> 
            </div>
            <div className='midddle'>
                <p>2.450</p> 
            </div>
            <div className='bottom'>
            <p>Total Product</p> 
            <p>2.59% <i class="fa-solid fa-arrow-up"></i></p>
            </div>
        </div>
        </Col>
        <Col xs={12} sm={6} lg={4} xl={3}>
        <div className='box box-orders'>
            <div className='top'> 
            <i class="fa-solid fa-user-group"style={{color: "#74C0FC"}}></i> 
            </div>
            <div className='midddle'>
                <p>3.456</p> 
            </div>
            <div className='bottom'>
            <p>Total Users</p> 
            <p>0.95% <i class="fa-solid fa-arrow-up"></i></p>
            </div>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default OrdersDetails