import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
  return (
    <>
      <Container  className='p-3'>
        <Row>
          <Col md={6}>
            <img src='./img/MarvinOceanFloor.png' width='100%' alt='aboutUsPic'/>
          </Col>

          <Col md={6} className='d-flex align-items-left flex-column align-self-center'>
            <h3>Thank You</h3>
            <p>We are glad you have decided to know more about our floor polishing company located in Lake Worth, Florida. Ocean Floor Services, Inc. has been operating for over 10 years and we're family owned. We serve the South Florida region with excellency. </p>

            <h3>Who We Are</h3>
            <p>Ocean Floor Services, Inc. strives to deliver a high standard of maintenance to earn your customer satisfaction. We specialize maintenance in tile, mexican tile, marble floor, and shower regrout. Give us a call or email us to set up an appointment with us.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage;
