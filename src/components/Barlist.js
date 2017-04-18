import React, { Component } from 'react';
import { Link } from 'react-router'


class Barlist extends Component {
  render() {
    return (
      <Link to={"detail/"+this.props.topbar.bar_id }>
      <li className="barlist">

       <img src={require("./image/" + this.props.topbar.image)} alt="sportsbar" width="350px" height="150px"  className="bar"></img>

        <h6>{this.props.topbar.barname}</h6>
        <h6>{this.props.topbar.address}</h6>
        <h6>{this.props.topbar.rating}</h6>
      </li>
      </Link>
    );
  }
}

Barlist.propTypes = {
  topbar: React.PropTypes.object
}

export default Barlist;
