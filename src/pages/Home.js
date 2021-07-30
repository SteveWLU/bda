import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CSS from '../App.css'

export default class Home extends Component {
    render() {
        return (
            <Container fluid style={{height:'100vh'}}>
                <Row>
                    <Col auto={1} style={{backgroundColor:'darkseagreen'}}>Sidebar</Col>
                    <Col auto={11}>
                    <Col style={{backgroundColor:'darkkhaki'}}>1 of 2</Col>
                    <Col style={{backgroundColor:'lightcyan'}}>2 of 2</Col>
                    <Col auto={12} style={{backgroundColor:'mediumaquamarine'}}>Footer</Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}
