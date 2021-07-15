import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AiOutlinePhone, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='PageColor '>
      <Container>
        <Row>
          <Col className='Page-Info text-center'>
            <img src='./img/Logo.png' alt='LogoFooter' width='32%' />
            <div className='pt-4'>
              <p>Commercial & Residential</p>
              <p>Licensed and Insured</p>
            </div>
          </Col>

          <Col className='Page-Info text-center'>

            <h3 className='header'>Contact Information: </h3>
            <h5><a href='tel:+5612555183' className='Page-Info' id='button1'><AiOutlinePhone/> (561) 255-5183</a></h5>
            <h5><a href="mailto:Oceanfloorservices@yahoo.com" className='Page-Info' id='button1'><AiOutlineMail /> Oceanfloorservices@yahoo.com</a></h5>

            <h3 className='pt-2 header'>Social Media: </h3>
            <h5><a href="https://instagram.com/oceanfloorservices?utm_medium=copy_link" className='Page-Info' id='button1'><AiOutlineInstagram /> oceanfloorservices</a></h5>
          </Col>
        </Row>
        <div className='Page-Info text-center'>Copyright &#169; {year} Ocean Floor Services, All Rights Reserved</div>
      </Container>
    </div>
  )
}

export default Footer
