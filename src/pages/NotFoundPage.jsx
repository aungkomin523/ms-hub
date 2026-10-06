import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Container className='p-5'>
        <Row>
            <Col className='d-flex flex-column align-items-center p-5'>
                <h1 className='text-danger mb-3'>404 - Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Button as={Link} to='/'>Return Home</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default NotFoundPage