import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Notice = () => (
    <Container id="notice-con">
    <Row>
        <Col id="notice">
            <span>&#9432; </span>
            <a href="">COVID-19 updates and resources for students, faculty and staff</a>
        </Col>
    </Row>
    </Container>
);