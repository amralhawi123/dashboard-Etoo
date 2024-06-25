import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap' 
import edit from '../../imgs/edit.png';
import dlete from '../../imgs/delete.png';
import MarktingDetails from '../../Components/Dashboard/markting/MarktingDetails';
import BasicTable from '../../Components/Dashboard/ecommerce/BasicTable';
import Campaign from '../../Components/Dashboard/markting/Campaign';
import MarktingTable from '../../Components/Dashboard/markting/MarktingTable';
import ExternalLinks from '../../Components/Dashboard/markting/ExternalLinks';
import CampaignChart from '../../Components/Dashboard/markting/CampaignChart';

const MarketingPage = () => {
    const [show,setShow]=useState('')

    const handleOpen =() => {
      show === "d-block"?setShow(''):
      setShow("d-block")
    }
    return (
        <div className="markt-page ">
          <Container>
            <Row className='p-2'>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: "10px" }}
            >
                <div>
                <h5 style={{marginBottom:"10px"}}>Highlights</h5>
                <p>Latest social statistics</p>
                </div>
                <div style={{position:"relative"}}>
        <i class=" fa-solid fa-ellipsis" onClick={handleOpen}></i>
        <div className={`${show} box-edit`}>
            <p><img src={edit} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='edit'/> Edit</p>
            <p><img src={dlete} style={{width:"18px",height:"18px", marginRight:"8px"}} alt='delete'/>Delete</p>
          </div>
          </div>
            </div>
            </Row>
            <Row className="p-2">
                <MarktingDetails/>
            </Row>
            <Row className="p-2">
            <Col sm={12} md={12} lg={7}>
            <MarktingTable />
          </Col>
          <Col sm={12} md={12} lg={5}>
            <Campaign  />
          </Col>
            </Row>
            <Row className="p-2">
            <Col sm={12} md={12} lg={5}>
            <ExternalLinks />
          </Col>
          <Col sm={12} md={12} lg={7}>
            <CampaignChart  />
          </Col>
            </Row>
          </Container>
        </div>
      );
}

export default MarketingPage