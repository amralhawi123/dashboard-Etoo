import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalInformation from '../../Components/Profile/PersonalInformation'
import YourPhoto from '../../Components/Profile/YourPhoto'

const ProfilePage = () => {
  return (
    <div className='p-3 m-3'>
        <h5>Profile Page</h5>
        <Container>
            <Row>
                <Col><PersonalInformation/></Col>
                <Col><YourPhoto/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProfilePage