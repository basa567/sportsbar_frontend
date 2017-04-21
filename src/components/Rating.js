
import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Rating extends Component {
   constructor(props) {
          super(props);
          this.state = {
            name:"",
            rating:0,
            review:"" ,
            barid:this.props.params.bid ,
            message:""
          };
          this.onSubmit = this.onSubmit.bind(this);
      }

    handleNameChange(e){
      this.setState({name: e.target.value});

    }
    handleRatingChange(e){
      this.setState({rating: e.target.value});
    }
    handleReviewChange(e){
      this.setState({review: e.target.value});
    }

    onSubmit() {

       fetch('https://sportsbbar.herokuapp.com/storerating', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         "name":this.state.name,
        "bar_id": this.state.barid,
        "rating_no": this.state.rating,
        "review": this.state.review
        })
      }) .then((response) => {
   if(response.ok) {
       this.setState({message:"Thanks!! for your review"});
       this.refs.inputName.value="";
       this.refs.inputComment.value="";
       this.refs.inputrating.value="";
   } else {
     this.setState({message:"Please try again!!"});
   }
 })

  }


  render() {
    const msg= this.state.message.length;
      if(msg>0){
        var  message =  this.state.message;
        }
    return (
      <form>
          <div className="container">
               <div className="row">
                  <div className="col col-lg-12 ">
                   <Link to={"detail/"+this.props.params.bid }> <button type="button" className="btn btn-primary gobackbtn">Go Back</button></Link>
                  </div>
              </div>
              <div className="row ">
                  <div className="col col-lg-12 alert alert-success">  
                   {message}
                  </div>
              </div>
              <div className="row">
                  <div className="col col-lg-12">
                    <input type="text" className="form-control namegap"  placeholder="Enter username" ref="inputName" onChange={this.handleNameChange.bind(this)}></input>
                  </div>
              </div>

              <div className="row">
                  <div className="col col-lg-12">
                    <select className="form-control" ref="inputrating" onChange={this.handleRatingChange.bind(this)} >
                      <option >Rate out of 5</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
              </div>

              <div className="row">
                  <div className="col col-lg-12">
                    <textarea class="form-control" className="txtcomment" id="comment" ref="inputComment" onChange={this.handleReviewChange.bind(this)}></textarea>
                  </div>
              </div>
              <button type="button" className="btn btn-success" onClick={this.onSubmit}>Submit</button>
          </div>
    </form>
    );
  }
}


export default Rating;
