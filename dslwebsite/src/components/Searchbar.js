import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, Form, FormControl, Button } from 'react-bootstrap';
import placeholderImage from "../images/KSU.png";

export const Searchbar = () => (
    <Container id="search-bar-con">
        <Row>
            <Col lg={2} class="search-bar-col"></Col>
            <Col lg={2} class="search-bar-col">
                <a href="https://www.kennesaw.edu/"><Image src={placeholderImage} alt="KSU-logo" width="200" height="100"/></a>
            </Col>
            <Col lg={4} class="search-bar-col">
                <Form inline id="searchbar">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="secondary">Search</Button>
                </Form>
            </Col>
            <Col lg={2} class="search-bar-col">
                <Button variant="secondary" id="admin-button">Admin</Button>
                <Button variant="secondary" id="contact-button">Contact Us</Button>
            </Col>
            <Col lg={2} class="search-bar-col"></Col>
        </Row>
    </Container>
);