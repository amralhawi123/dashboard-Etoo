import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataPackerUtility from './../../Components/uitlity/DataPackerUtility';
import ChartAnalytics from "../../Components/Dashboard/analytics/ChartAnalytics";
import AnalyticsDetails from './../../Components/Dashboard/analytics/AnalyticsDetails';
import WorldMapComponent from "../../Components/Dashboard/ecommerce/WorldMapComponent";
import CustomizedProgressBars from './../../Components/uitlity/CustomizedProgressBars';
import TopContentAnalytics from "../../Components/Dashboard/analytics/TopContentAnalytics";
import TopChannelAnalytics from "../../Components/Dashboard/analytics/TopChannelAnalytics";
import DoughnutChart from "../../Components/Dashboard/ecommerce/DoughnutChart";
import ProductsTable from "../../Components/Dashboard/analytics/ProductsTable";

const AnalyticsPage = () => {
  return (
    <div className="dash-page ">
      <Container>
        <Row className="p-2">
          <Col sm={12} md={12} lg={12}>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginTop: "10px" }}
            >
              <div className="box">
                <DataPackerUtility />
              </div>
              <div className="box">
                <select name="date" id="date" style={{ border: "none" }}>
                  <option value="volvo">week</option>
                  <option value="saab">year</option>
                </select>
              </div>
            </div>
          </Col>
          <Col sm={12} md={12} lg={12} className="d-flex">
            <ChartAnalytics />
          </Col>
        </Row>
        <Row className="p-2">
            <AnalyticsDetails />
        </Row>
        <Row className="p-2">
          <Col sm={12} md={12} lg={6}>
            <div className="box">
              <h5 style={{ marginBottom: "10px" }}>Sessions by country</h5>
              <WorldMapComponent />
              <hr />
              <CustomizedProgressBars />
            </div>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <TopContentAnalytics />
            <TopChannelAnalytics />
          </Col>
        </Row>
        <Row className="p-2">
          <Col sm={12} md={12} lg={5}>
            <DoughnutChart />
          </Col>
          <Col sm={12} md={12} lg={7}>
            <ProductsTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AnalyticsPage;
