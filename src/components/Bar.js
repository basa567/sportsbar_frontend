import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Button } from 'react-bootstrap';
import barimg from './image/barimg.png';
import Rating from './Rating.js';
import '../assests/style.css';
import { Link } from 'react-router'

class Bar extends Component {
  render() {
    return (
      <div className="bar">
          <div className="bar-title">
             <h1>TOP 3 BARS </h1>
          </div>  
        <Grid>
          <Row>
          <Col xs={6} md={4}>
            <Thumbnail  href="/detail" className="barimg" src={barimg} alt="image" >
                    <h4>Sport Bar</h4>
                    <p>Rating:3</p>
                    <p>Location</p>
            </Thumbnail>
          </Col>

              <Col xs={6} md={4}>
                  <Thumbnail   href="/detail" className="barimg" src={barimg} alt="image" >
                      <h4>Sport Bar</h4>
                      <p>Rating:4</p>
                      <p>Location</p>
                    </Thumbnail>
              </Col>

            <Col xs={6} md={4}>
                <Thumbnail  href="/detail" className="barimg" src={barimg} alt="image" >
                      <h4>Sport Bar</h4>
                      <p>Rating:4.5</p>
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
