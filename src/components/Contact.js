import React, { Component } from 'react';
import { Grid,Row,Image,Col,Thumbnail } from 'react-bootstrap';



class Contact extends Component {
  render() {
    return (
      <div className="contact">     
        <Grid>
          <Row>
          <Col xs={12} md={12}> 
              <h2>CONTACT US</h2>   
            <p><b>Email:</b></p>
            <p>Sportsbar@outlook.com </p>
            <p><b>Address:</b></p>
            <p>Kotkantie,Oulu,Finland</p>            
            <p><b>Contributor:</b></p>
            <p>Melen Taye, Samita K C, Suman Kharel</p>
          </Col>     
        </Row>
      </Grid>
      </div>
    );
  }
}

export default Contact;
