import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import placeholderImage from "../images/logo.dSL.png";

export const Title = () => (
    <Container id="title-con">
        <Row id="title-row">
            <Col lg={2} sm={1}class="title-col" id="my-col"><div class="yellow-line"></div></Col>
            <Col lg={4} sm={5} id="title-image my-col">
                <a href="/"><Image id="logo-image" src={placeholderImage} alt="dSL Logo" width="150" height="150" /></a>
            </Col>
            <Col lg={4} sm={5} id="title-intro my-col">
                <h6 class="title-intro-1">KENNESAW STATE UNIVERSITY</h6>
                <p class="title-intro-2">COLLEGE OF COMPUTING AND</p>
                <p class="title-intro-3">SOFTWARE ENGINEERING</p>
            </Col>
            <Col lg={2} sm={1} class="title-col" id="my-col"><div class="black-line"></div></Col>
        </Row>
    </Container>
);