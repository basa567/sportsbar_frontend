import React, { Component } from 'react';
import apigame from './apigame.js';
import { Link } from 'react-router'


class Search extends Component {

   constructor(props) {
          super(props);
          this.state = {
            sport:[],
            input:"",
            date:"",
            bars:[],
            count:-1                     
          };
          this.Search = this.Search.bind(this);
      }

    componentWillMount() {
          apigame.getsport().then((res)=>{
            this.setState({
              sport:res
            })
          })
     }

    handleChange(e) {
        this.setState({input:e.target.value});
     }

   handleChangeDate(e) {
        this.setState({date:e.target.value});
    }

   Search(){
         var sportid = this.state.input;
         var date  = this.state.date;
         var url = "https://sportsbbar.herokuapp.com/getscbydatesport/"+date+"/"+sportid+"";
         this.setState({
           count:0
         })
        var api = {
            getbar(){
                return fetch(url).then((res)=>res.json());
            }
        };

       api.getbar().then((res)=>{
         this.setState({
            bars:res,
            count:1                                            
          });
      })     
    }

    render() {  
       
      if(this.state.count==1){        
        var button = this.state.bars.map((time, i) => <SearchResult key={i} data={time} />)
      }
      if(this.state.count==0){
        var button = <NotFoundResult/>
      }
      return (
        <div className="background">
          <div className="container scontainer">
            <div className="row">
                <div className="col col-sm-6">
                </div>
                <div className="col col-sm-2">
                </div>
                <div className="col col-lg-4">
                </div>
            </div>
        </div>
        <div className="container scontainer">
            <div className="row">
                <div className="col col-sm-4">
                </div>
                <div className="col col-lg-6">
                  <h2 className="slogan">Find the best sport bar in Oulu</h2>
                </div>
                <div className="col col-lg-2">
                </div>
            </div>
        </div>
        <div className="container scontainer">
          <div className="row">
              <div className="col col-lg-2">
              </div>
              <div className="col col-lg-5">
                <select className="form-control" onChange={this.handleChange.bind(this)}>
                  <option >Search By Game</option>
                  {
                    this.state.sport.map(function(item, i){
                      return <option value={item._id} key={i}>{item.sportname}</option>
                    })
                  }
                </select>
              </div>
              <div className="col col-lg-3">
                <input type="date" className="txtDate form-control" onChange={this.handleChangeDate.bind(this)} ></input>
              </div>
              <div className="col col-lg-1">
               <button className="btn btn-success sbtn" onClick={this.Search} >Find</button>
              </div>
                <div className="col col-lg-1">
              </div>
          </div>
      </div>
      <div className="container scontainer">
          <div className="row">
          </div>
      </div>
      {button}       
     </div>
      );
  }
}
 class SearchResult extends Component {
                   render() {
                    return (
                       <div className="backdivcolor">
                          <div className="container">
                          <div className="row">
                              <div className="col col-sm-12 alert">
                                <strong></strong>
                              </div>
                          </div>
                        </div>
                       <Link to={'detail/'+this.props.data.bar_id}  className="resultcontent">
                        <div className="container">
                          <div className="row">
                              <div className="col col-sm-4 ">
                                <img src={require("./image/" + this.props.data.image)} alt="sportsbar" width="350px" height="150px"  className="bar"></img>
                                <div className="content">
                                  <div className="titlebar"> {this.props.data.barname}</div>
                                  <div> Timetable:{this.props.data.time}</div>
                                  <div> {this.props.data.address}</div>
                                </div>
                              </div>
                          </div>
                      </div>
                     </Link>
                        <div className="container contentgap">
                          <div className="row">
                              <div className="col col-sm-5">
                              </div>
                              <div className="col col-lg-3 ">
                                <h3></h3>
                              </div>
                              <div className="col col-lg-4 ">
                              </div>
                          </div>
                        </div>
                      </div>
                    )
              }
 }

 class NotFoundResult extends Component {
        render() {
            return (
               <div className="noresult">
                  <div className="container contentgap">
                      <div className="row">                         
                           <div className="col col-lg-12 ">
                                <p><b>Result Not Found</b></p>
                            </div>                           
                          </div>
                        </div>
                      </div>
                    )
    }
 }

  class FoundResult extends Component {
        render() {
            return (
               <div className="backdivcolor">
                  <div className="container contentgap">
                      <div className="row">
                         <div className="col col-sm-5">
                          </div>
                           <div className="col col-lg-3 ">
                                <h3> Result found</h3>               
                            </div>
                            <div className="col col-lg-4 ">
                              </div>
                          </div>
                        </div>
                      </div>
                    )
    }
 }


export default Search;
