import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Services() {
  return (
    <Container className='p-5 '>
      <Row>
        <Col md={12} className='p-4 d-flex justify-content-center'>
          <h2>Service List: </h2>
        </Col>
        <Col md={3} xs={6} className='serviceTiles'>
          <h3 className='text-center'>Tile</h3>
          <ul>
            <li>Scrub Brush</li>
            <li>Deep Cleaning</li>
            <li>Stain Seal Grout</li>
            <li>Color Change</li>
          </ul>
        </Col>
        <Col md={3} xs={6} className='serviceTiles'>
          <h3 className='text-center'>Mexican Tile</h3>
          <ul>
            <li>Stripper Floor</li>
            <li>Scrub Brush</li>
            <li>Seal Floor</li>
            <li>High Gloss</li>
            <li>Wet Look</li>
          </ul>
        </Col>
        <Col md={3} xs={6} className='serviceTiles'>
          <h3 className='text-center'>Marble Floor</h3>
          <ul>
            <li>Diamond</li>
            <li>Grinding</li>
            <li>Polish</li>
            <li>Seal</li>
          </ul>
        </Col>
        <Col md={3} xs={6} className='serviceTiles'>
          <h3 className='text-center'>Shower Regrout</h3>
          <ul>
            <li>Marble</li>
            <li>Tile</li>
            <li>Counter Top</li>
          </ul>
        </Col>
        <Col md={12} className='serviceTiles p-2'>
          <h3 className='text-center'>Other Floor Works:</h3>
          <ul className='d-flex justify-content-center flex-column align-items-center'>
            <li>Stones</li>
            <li>Terrazo</li>
            <li>Granite</li>
            <li>Marble Shower and Counter Top</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
