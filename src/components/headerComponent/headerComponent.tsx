import React from 'react';
import logo from '../../images/logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './headerComponent.css';
import Navigation from '../navbar/navbar';



const HeaderComponent=()=>{
  return (
    <Row className='pt-4 main'>
        <Col xs={12} md={3} 
        className='d-flex justify-content-center justify-content-md-start mb-3'>
            <img src={logo} alt='logo'/>
        </Col>
        <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
             <button className="button-signup">Sign up</button>
             <button className="button-signin">Sign in</button>
        </Col>
        <Col className='d-none d-md-flex justify-content-end align-items-center'>
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
        <Navigation />
    </Row>
  );
}

export default HeaderComponent;