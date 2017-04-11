import React, { Component } from 'react';
import { Grid,Row,Image,Col,Thumbnail } from 'react-bootstrap';
import suman from './image/suman.png';


class Contact extends Component {
  render() {
    return (
      <div className="contact">
      <div className="contact-title">
        <h2>contact US</h2>
      </div>
    <Grid>

      <Row>
      <Col xs={6} md={4}>
        <Image src={suman} className="img-contact" alt="Cinque Terre" circle />
        <h4>Suman </h4>
        <p>Email:suman@sportbar.fi </p>
      </Col>
      <Col xs={6} md={4}>
      <Image src={suman} className="img-contact"alt="Cinque Terre" circle />
        <h4>Suman </h4>
      <p>Email:suman@sportbar.fi </p>
      </Col>
      <Col xs={6} md={4}>
        <Image src={suman} className="img-contact" alt="Cinque Terre" circle />
          <h4>Suman </h4>
        <p>Email:suman@sportbar.fi </p>
      </Col>
    </Row>
  </Grid>
      </div>
    );
  }
}

export default Contact;
