import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Search from './components/Search.js';
import Map from './components/Map.js';
import Sport from './components/Sport.js';
import Bar from './components/Bar.js';
import Detail from './components/Detail.js';
import Contact from './components/Contact.js';
import Rating from './components/Rating.js';
import Review from './components/Review.js';
import "./assests/style.css";

import { Router, Route, browserHistory,Link } from 'react-router'

class  App extends Component {
  render() {
    return ( 
     <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">  
          <div className="navbar-header logo">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand title " href="#">Sports Bar</a>
          </div>   
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/search">Search</Link></li>
               <li><Link to="/map">Map</Link></li>
               <li><Link to="/top3bar">Top 3 Bar</Link></li> 
               <li><Link to="/contact">Contact</Link></li> 
            </ul>     
          </div>
        </div>
        {this.props.children}  
      </nav>
     </div>
    );
  }
}
ReactDOM.render( <Router history={browserHistory }>
        <Route path='/' component={App}> 
          <Route path='/search'component={Search}></Route>
           <Route path='/map'component={Map}></Route>          
          <Route path='/top3bar' component={Bar}></Route>
          <Route path='/contact' component={Contact}></Route>          
          <Route path='detail/:barid' component={Detail}></Route>
          <Route path='rating/:bid' component={Rating}></Route>          
        </Route>
      
      </Router>,document.getElementById('root'))
