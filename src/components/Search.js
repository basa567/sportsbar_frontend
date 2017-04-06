import React, { Component } from 'react';
import apigame from './apigame.js';
import { Link } from 'react-router'


class Search extends Component {
   constructor(props) {
          super(props);
          this.state = {
            sport:[],
            input:"",
            date:""
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
        //  var sportid = this.state.input;
        //  var date  = this.state.date;  
        //  var apisearch = {
        //     getbar(){
        //       var url ="https://sportsbbar.herokuapp.com/getscbydatesport/2017-04-03/58e1f0d7b229d80004b2be3b";
        //       return fetch(url).then((res)=>res.json());
        //       }
        //     };      
         var apisearch = {
            getbar(){
              var url ="https://sportsbbar.herokuapp.com/getscbydatesport/2017-04-03/58e1f0d7b229d80004b2be3b";
              return fetch(url).then((res)=>res.json());
              }
            };
        apisearch.getbar().then((res)=>{
            this.setState({
              searchbar:res
            })
          })
         
      }
  render() {
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
              <Link to="/searchbar"><button className="btn btn-success sbtn" onClick={this.Search}>Find</button></Link>                
            </div>
              <div className="col col-lg-1">
              
            </div>
        </div>        
     </div>
     <div className="container scontainer">
        <div className="row">            
        </div>        
     </div>
     </div>
    );
  }
}

export default Search;
