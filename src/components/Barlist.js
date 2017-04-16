import React, { Component } from 'react';
import {barimg} from './image/barimg.png';

class Barlist extends Component {
  render() {
    return (
      <li className="barlist">
    <img src={require("./image/barimg.png")} alt="sportsbar" width="350px" height="150px"  className="bar"></img>

        <h6>{this.props.topbar.barname}</h6>
        <h6>{this.props.topbar.address}</h6>
        <h6>{this.props.topbar.rating}</h6>
      </li>
    );
  }
}

Barlist.propTypes = {
  topbar: React.PropTypes.object
}

export default Barlist;
