import React, { Component } from 'react';
import { Link } from 'react-router'


class Rating extends Component {
  render() {
    console.log(this.props.params.barid);
    return (
      <div className="AddReview">
       <form action="#" method="POST">
            <div className="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email"></input>
            </div>
            <div className="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd"></input>
            </div>
            <div className="checkbox">
               <input type="checkbox"> Remember me</input>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default Rating;