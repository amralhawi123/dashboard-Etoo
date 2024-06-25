import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrdersDetails from "../../Components/Dashboard/ecommerce/OrdersDetails";
import LineCharts from "../../Components/Dashboard/ecommerce/LineChart";
import VerticalCharts from "../../Components/Dashboard/ecommerce/VerticalCharts";
import DoughnutChart from "../../Components/Dashboard/ecommerce/DoughnutChart";
import WorldMapComponent from "../../Components/Dashboard/ecommerce/WorldMapComponent";
import Chats from "../../Components/Dashboard/ecommerce/Chats";
import BasicTable from './../../Components/Dashboard/ecommerce/BasicTable';


const EcommercePage = () => {
  return (
    <div className="dash-page ">
      <Container>
        <Row className="p-2">
            <OrdersDetails />
        </Row>
        <Row className="p-2">
          <Col sm={12} md={12} lg={6}>
            <LineCharts />
          </Col>
          <Col sm={12} md={12} lg={6}>
            <VerticalCharts />
          </Col>
        </Row>
        <Row className="p-2">
          <Col sm={12} md={12} lg={5}>
            <DoughnutChart />
          </Col>
          <Col sm={12} md={12} lg={7}>
            <WorldMapComponent />
          </Col>
        </Row>
        <Row className="p-2">
          <Col sm={12} md={12} lg={8}>
            <BasicTable />
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Chats />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcommercePage;
