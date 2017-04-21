import React, { Component } from 'react';
import { Link } from 'react-router'


class Barlist extends Component {
 render() {
     const rating =this.props.topbar.rating;
     var rate = rating.toFixed(1);     
    return (
      <Link to={"detail/"+this.props.topbar.bar_id }>
      <div className="barlist">
      <div className="row">
      <div className="col-sm-12 col-md-6">
        <img src={require("./image/" + this.props.topbar.image)} alt="sportsbar" width="350px" height="150px"  className="bar"></img>
      </div>

      <div className="col-sm-12 col-md-6">
        <h4>{this.props.topbar.barname}</h4>
        <h6>{this.props.topbar.address}</h6>
        <h6>Rating:{rate}</h6>
      </div>
      </div>
      </div>
      </Link>
    );
  }
}

Barlist.propTypes = {
  topbar: React.PropTypes.object
}

export default Barlist;
