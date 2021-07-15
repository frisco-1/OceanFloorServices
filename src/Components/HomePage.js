import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <>
      <Jumbotron className='homeBackground d-flex justify-content-center align-items-center flex-column fs-5'>
       
        <h3>Ocean Floor Services, Inc.</h3>
        <div className='d-flex homeList'>
          <p>Tile ★</p>
          <p>Mexican Floor ★</p>
          <p>Marble Floor ★</p>
          <p>Shower Regrout</p>
        </div>
        <h3>Call for an Estimate | Hablamos Español</h3>
        <h3>(561) 255-5183</h3>
      </Jumbotron>

      <Container className='mt-4 mb-4'>
        <Row>
          <Col md={6}>
            <h2>Ocean Floor Services, Inc.</h2>
            <hr/>
            <p className='pb-2 fs-5'>We are a floor polishing service located in Lake Worth, Florida! We offer great cleaning services at affordable prices. Serving both residential and commercial clients. Our team is licensed and insured. Contact us for a free estimate.</p>

            <h5>Services Include: </h5>
            <ul className='pb-4'>
              <li>Tile</li>
              <li>Mexican Floor</li>
              <li>Marble Floor</li>
              <li>Shower Regrout</li>
            </ul>

            <h5>Come on and try our company. You'll fall right in love with your new floor!</h5>
          </Col>
          <Col md={6}>
            <img src='./img/CarsAtHouse.jpg' alt='OceanFloorPic' width='100% '/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
