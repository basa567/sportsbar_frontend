import React, { Component } from 'react';


class Barlist extends Component {
  render() {
    return (
      <li className="barlist">
   <img src={require("./image/" + this.props.topbar.image)} alt="sportsbar" width="350px" height="150px"  className="bar"></img>
        {/* <img src={require(this.props.topbar.image)/></img> */}
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
