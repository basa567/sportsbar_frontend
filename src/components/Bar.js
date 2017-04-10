import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Button } from 'react-bootstrap';
import barimg from './Image/barimg.png';
import Rating from './Rating.js';
import '../assests/style.css';

class Bar extends Component {
  render() {
    return (
      <div className="bar">
          <div className="bar-title">
            <h2>Top 3 bars</h2>
          </div>
  <Grid>
    <Row>
    <Col xs={6} md={4}>

      <Thumbnail  href="#" className="barimg" src={barimg} alt="image" >
              <h4>Sport Bar</h4>
              <p>Rating:<Rating /></p>
              <p>Location</p>
      </Thumbnail>
    </Col>

        <Col xs={6} md={4}>
            <Thumbnail   href="#" className="barimg" src={barimg} alt="image" >
                <h4>Sport Bar</h4>
                <p>Rating:<Rating /></p>
                <p>Location</p>
              </Thumbnail>
        </Col>

      <Col xs={6} md={4}>
          <Thumbnail  href="#" className="barimg" src={barimg} alt="image" >
                <h4>Sport Bar</h4>
                <p>Rating:<Rating /></p>
                <p>Location</p>
            </Thumbnail>
        </Col>
    </Row>
  </Grid>
</div>
    );
  }
}

export default Bar;
