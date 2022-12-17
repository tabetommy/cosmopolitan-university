import React from 'react';
import logo from '../../images/logo.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './headerComponent.css'



const HeaderComponent=()=>{
  return (
    <Row className='py-4'>
        <Col xs={12} md={3} 
        className='d-flex justify-content-center justify-content-md-start mb-3'>
            <img src={logo} alt='logo'/>
        </Col>
        <Col xs={12} md={6} className='d-flex justify-content-center'>
            <Button variant="outline-primary" size="lg"
             className='mx-2'>Sign up</Button>
            <Button variant="outline-primary" size="lg"
             className='mx-2'>Sign in</Button>
        </Col>
        <Col className='d-none d-md-flex justify-content-end'  >
            <a href="https://www.youtube.com/c/jamesqquick"
            target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.youtube.com/c/jamesqquick"
            target='_blank' rel="noreferrer" className='mx-2'>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.youtube.com/c/jamesqquick"
            target='_blank' rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.youtube.com/c/jamesqquick"
            target='_blank' rel="noreferrer" className='mx-2'>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </Col>
    </Row>
  );
}

export default HeaderComponent;