import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { BiMap } from 'react-icons/bi'
import { AiOutlinePhone } from 'react-icons/ai'


function TopInfo() {
  return (
    <>
      <div id='remove'>
        <Container fluid className='d-flex justify-content-center PageColor' >
          <Row>
            <Col className='align-self-center'>
              <h4 className='Page-Info'><BiMap /> Lake Worth, FL</h4>
            </Col>
            <Col>
            <img src='./img/Logo.png' alt='OceanFloorOcean' width='100%'/>
            </Col>
            <Col className='align-self-center'>
            <h4><a href='tel:+5612555183' className='Page-Info' id='button1'><AiOutlinePhone /> (561) 255-5183</a></h4>
            </Col>
          </Row>
          </Container>
      </div>
    </>
  )
}

export default TopInfo
