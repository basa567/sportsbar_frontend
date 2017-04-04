import React, { Component } from 'react';


class Bar extends Component {
  render() {
    return (
    <div className="backdivcolor"> 
    <div className="container">
        <div className="row">             
            <div className="col col-sm-5">                                
            </div>            
             <div className="col col-lg-3 ">
               <h3>Top 3 sports bar in oulu </h3>
            </div>
            <div className="col col-lg-4 ">               
            </div>           
        </div>            
     </div>
      <div className="container">
        <div className="row"> 
         < a href="#bar1">            
            <div className="col col-sm-4 ">  
              <img src={require("./image/bar3.jpg")} alt="sportsbar" width="350px" height="150px"  className="bar"></img>
               <h4><b className="title">Tivoli Oulu</b></h4> 
               <p>Isokatu 35, 90100 Oulu,Finland</p>                   
            </div> 
          </a>  
          < a href="#bar2">          
             <div className="col col-lg-4 ">
              <img src={require("./image/bar2.jpg")} alt="sportsbar" width="350px" height="150px" className="bar"></img>
               <h4><b className="title">Tivoli Oulu</b></h4> 
               <p>Isokatu 35, 90100 Oulu,Finland</p>
            </div>
            </a> 
          <a href="#bar3"> 
            <div className="col col-lg-4 ">
               <img src={require("./image/bar4.jpg")} alt="sportsbar" width="350px" height="150px" className="bar"></img>
                <h4><b className="title">Tivoli Oulu</b></h4> 
                <p>Isokatu 35, 90100 Oulu,Finland</p>
            </div>
          </a>           
        </div>            
     </div>
    </div>
    );
  }
}

export default Bar;
