import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div className="background">   
      <div className="container scontainer">
        <div className="row">
            <div className="col col-sm-6">              
            </div>  
            <div className="col col-sm-2">
              <img src={require("./image/logo.png")} alt="sportsbar" height="100px" width="100px" className="logo"></img>
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
              <select className="form-control">
                 <option >Search By Game</option>
                <option value="">volleyball</option>
                <option value="">Football</option>
              </select>
            </div>
            <div className="col col-lg-3">
              <input type="date" className="txtDate form-control"></input>
            </div>
            <div className="col col-lg-1">
                <button className="btn btn-success sbtn">Find</button>
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
