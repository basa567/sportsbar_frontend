import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Image,Button,wellStyles} from 'react-bootstrap';
import detailimg from './Image/detailimg.png';
import '../assests/detail.css';

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="detail-title">
          <h2>Detail</h2>
           </div>

          <Grid>
             <Row>
              <div className="detailname">
          <Col xs={12} md={8} >
             <Image className="detailimg" src={detailimg}  width={900} height={350} responsive />
         </Col>
               <Col xs={6} md={4} >
                 <div className="detail-list">
                   <h1>Barname</h1>
                   <p>location: </p>
                   <p>Working hours:</p>
                   <p>Rating:</p>
                </div>
              </Col>
            </div>

             </Row>
           </Grid>

        </div>

    );
  }
}

export default Detail;
