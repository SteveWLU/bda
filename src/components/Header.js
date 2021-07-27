import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Stemma from '../assets/images/stemma.png'

class Header extends Component {
    render() {
        return (
            <div>
               <header className="App-header">
                    <Card className="mb-3" style={{ color: "#000" }} >
                    <Card.Img style={{ height:'auto', width:'50%'}} src={ Stemma }/>
                    <Card.Body>
                        <Card.Title>Lorenzo Benci</Card.Title>
                        <Card.Text>Fifteenth-century Florentine merchant and book addict.</Card.Text>
                        <Button variant="success">Learn more!</Button>
                    </Card.Body>
                    </Card>
                </header> 
            </div>
        );
    }
}

export default Header;