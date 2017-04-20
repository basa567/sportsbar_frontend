import React, { Component } from 'react';
import { Link } from 'react-router'

class Review extends Component {
   constructor(props) {
          super(props);
          this.state = {
            rating:[]
          }
      }

   componentDidMount() {
       var url ="https://sportsbbar.herokuapp.com/getbarrate/"+this.props.params.bid;
       this.api={
              getreview(){
                  return fetch(url).then((res)=>res.json());
              }
        };
       this.api.getreview().then((res)=>{
           this.setState({
              rating:res
            });
        })

   }
  render() {
    const ratinglength = this.state.rating.length;
    console.log(ratinglength);
    if(ratinglength>0){
      var review = this.state.rating.map((time, i) => <ReviewResult key={i} data={time} />)
    }
    return (
    <div>
      <div className="container">
          <div className="row">
              <div className="col col-sm-12 ">
                <div className="row">
                    <div className="col col-lg-12 ">
                    <Link to={"detail/"+this.props.params.bid }> <button type="button" className="btn btn-primary gobackbtn">Go Back</button></Link>
                    </div>
                </div>
              </div>
          </div>
      </div>
      {review}
     </div>
    );
  }
}

 class ReviewResult extends Component {
      render() {
            return (
                <div className="container review">
                  <div className="row">
                      <div className="col col-sm-12 titlename">
                        <h4>{this.props.data.name} says</h4>
                      </div>
                      <div className="col col-sm-12 ">
                        <p class="cmt">{this.props.data.review}</p>
                      </div>
                  </div>
               </div>
            )
         }
       }

export default Review;
