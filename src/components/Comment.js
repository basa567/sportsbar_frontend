import React, { Component } from 'react';
import { Media,Image,Grid,Col,Row} from 'react-bootstrap';
import barimg from './Image/barimg.png';
import '../assests/detail.css';

class Comment extends Component {
  render() {
    return (

      <div className="Comment">

  <Grid>
    <Row>
       <Col  md={4} mdpush={4}  >
         <div className="comment-title">
           <h2>Review</h2>
         </div>
        <Media>
          <Media.Left align="top">
            <Image width={64} height={64} className="com-img" src={barimg} alt="Image" circle/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>TitleName</Media.Heading>
            <p>Rating</p>

            <p>Comment.the quick brown box jumps over the lzy dog</p>
          </Media.Body>
        </Media>
      </Col>

  </Row>
</Grid>
      </div>

    );
  }
}

export default Comment;
