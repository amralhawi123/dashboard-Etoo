import React from 'react'
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import LoginHook from '../../hooks/utility/login-hook';
import { ToastContainer } from "react-toastify";

const LoginPages = () => {

  const  [email, password, loading, onChangeEmail, onChangePassword, onSubmit, isPress,res]= LoginHook()
  return (
    <div className="login-page">
    <Container  style={{minHeight:"570px",transform: "translateY(18%)"}}>
            <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <h5 className="mx-auto title-login">Login</h5>
          <input
          value={email}
          onChange={onChangeEmail}
            placeholder="enter your email..."
            type="email"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="enter your passwoard..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">Log in</button>
          <h7 className="mx-auto my-4 sub-title">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </h7>
          <h7 className="mx-auto my-4 sub-title">
            <Link to="/user/forget-password" className="sub-title" style={{ textDecoration: "none" }}>
                هل نسيت كلمة السر
            </Link>
          </h7>
        </Col>
        {isPress===true? (loading===true?( <Spinner animation="border" variant="primary" />):null): null}
      </Row>
      <ToastContainer />
    </Container>
    </div>
  )
}

export default LoginPages
