import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import github from '../assets/img/github-mark-white.svg';


const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-item-center">
                {/* <Col sm={6}>
                    <img src={logo} alt='Logo' />
                </Col> */}
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                        <a href='https://github.com/acu8' target="_blank"><img src={github} alt=''/></a>

                        {/* <a href=''><img src={navIcon2} /></a>
                        <a href=''><img src={navIcon3} /></a> */}
                    </div>
                    <p>CopyRight 2023. All Right Reserved by the owner of this website.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer