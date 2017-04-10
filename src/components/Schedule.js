import React, { Component } from 'react';
import $ from 'jquery';
import Drink from './Drink.js';
import { Grid,Row,Col,Button,PropTypes,Children,custom} from 'react-bootstrap';

import '../assests/detail.css';
class Schedule extends Component {
  constructor(props) {
  super(props);
  this._volleyball = this._volleyball.bind(this);
  this._basketball = this._basketball.bind(this);
  this._football = this._football.bind(this);
}
_volleyball(){
    $(this.refs['volleyball']).slideToggle();
}
_basketball() {
  $(this.refs['basketball']).slideToggle();
}
_football(){
    $(this.refs['football']).slideToggle();
}


  render() {
    return (
      <div className="Schedule">

    <Grid>

      <Row>

         <Col  md={6} mdpull={6}  >
           <div className="sch-title">
             <h2>Sport Schedule</h2>
           </div>
           <div className="sch_btn" >
                <Button bsStyle="custom" bsSize="large" onClick={this._volleyball} block>Volleyball</Button>
                <div ref="volleyball">
                    <p>I'm a div with vollyball</p>
                  </div>
                <Button bsStyle="custom" bsSize="large" onClick={this._basketball} block>Basketball</Button>
                <div ref="basketball">
                  I'm a div with basketball
                  </div>
                <Button bsStyle="custom" bsSize="large" onClick={this._football} block>Football</Button>
                <div ref="football">
                  I'm a div football
              </div>
                </div>
        </Col>
  <Drink/>
    </Row>
  </Grid>

      </div>

    );
  }
}
export default Schedule;
