import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'

function Contact() {
  return (
    <div className='ContactColor'>
      <Container className='p-5'>
        <Row>
          <Col md={12} className='d-flex justify-content-center'><img src='./img/Logo.png' alt='Logo' width='25%'/></Col>

          <Col md={6} className='d-flex justify-content-center align-items-center'>
            <h3 className='Contactheader'>Give us a call or send us an email to request an appointment with us!</h3>
          </Col>
          
          <Col md={6} className='d-flex justify-content-center flex-column text-center'>

            <h3 className='Contactheader'>Contact Information: </h3>
            <h5><a href='tel:+5612555183' id='button2'><AiOutlinePhone/> (561) 255-5183</a></h5>
            <h5><a href="mailto:Oceanfloorservices@yahoo.com" id='button2'><AiOutlineMail /> Oceanfloorservices@yahoo.com</a></h5>

            <h3 className='pt-2 Contactheader'>Social Media: </h3>
            <h5><a href="https://instagram.com/oceanfloorservices?utm_medium=copy_link"id='button2'><AiOutlineInstagram /> oceanfloorservices</a></h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact;
