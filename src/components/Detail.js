import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Image,Button,wellStyles} from 'react-bootstrap';
import Schedule from './Schedule.js';
import detailimg from './image/detailimg.png';
import { Link } from 'react-router'


class Detail extends Component {
  render() {
    return (
    <div>
      <div className="detail">        
          <Grid>
             <Row>
              <div className="detailname">
          <Col xs={12} md={8} >
             <Image className="detailimg" src={detailimg} responsive />
         </Col>
               <Col xs={6} md={4} >
                 <div className="detail-list">
                   <h3>Barname</h3>
                   <p>location: </p>
                   <p>Working hours:</p>
                   <p>Rating:</p>
                </div>
              </Col>
            </div>
             </Row>
           </Grid>          
        </div>
          <Schedule/>
         <Grid>
             <Row>
            <Col  md={12} mdpull={12}  >           
           <div className="sch_btn" >
               <Link to="/rating"> <Button bsStyle="customrating" bsSize="large" block>Give Your Views & Rating</Button></Link>
               <Link to="/review">  <Button bsStyle="customreview" bsSize="large" block>See Review</Button> </Link>           
            </div>
           </Col>
             </Row>
            </Grid>
          </div>
    );
  }
}

export default Detail;
