import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CETEI from 'CETEIcean'

// CODE TO RUN CETEICEAN

var CETEIcean = new CETEI()
CETEIcean.getHTML5("../Assets/Corpora/barberino/rl.xml", function(data) {
  document.getElementById("TEI").appendChild(data)
})

export default class CeteiceanComp extends Component {
    render() {
        return (
            <Container>
                <Row className="row-eq-height justify-content-md-center">
                    <Col id="TEI" className="custom-scroll"></Col>
                </Row>
            </Container>
        );
    }
}