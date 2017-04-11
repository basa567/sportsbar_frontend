import React, { Component } from 'react';
import { Grid,Row,Image,Col,Thumbnail } from 'react-bootstrap';
import suman from './image/suman.png';


class Contact extends Component {
  render() {
    return (
      <div className="contact">     
        <Grid>
          <Row>
          <Col xs={12} md={12}> 
              <h2>CONTACT US</h2>   
            <p>Email:</p>
            <p>Sportsbar@outlook.com </p>
            <p>Address:</p>
            <p>Kotkantie,Oulu,Finland</p>            
            <p>Contributor:</p>
            <p>Melen Tesfu,Suman kharel,Samita KC</p>
          </Col>     
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Contact;
