import React, { Component } from 'react';
import { Grid,Row,Col,FormGroup,ControlLabel,FieldGroup,FormControl,Button,InputGroup} from 'react-bootstrap';

import '../assests/detail.css';

class AddReview extends Component {
  render() {
    return (
      <div className="AddReview">
   <form>
      <Grid>

        <Row>

           <Col  md={6} mdpush={6}  >
             <div className="AddReview-title">
               <h2>Reviwe</h2>
         </div>


<FormGroup>
      <ControlLabel>Name:</ControlLabel>
          <FormControl
              id="formControlsText"
              type="text"
              label="Text"
              placeholder="Enter text"
            />

          </FormGroup>
          <FormGroup controlId="formControlsSelect">
              <ControlLabel>Rating</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                  <option value="five">5</option>
                </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
       <ControlLabel>Reviw</ControlLabel>
       <FormControl componentClass="textarea" placeholder="textarea" />
     </FormGroup>

     <Button type="submit" bsStyle="custom" bsSize="medium">
    Submit
   </Button>
 </Col>
  </Row>
</Grid>
</form>
      </div>
    );
  }
}

export default AddReview;
