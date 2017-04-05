import React, { Component } from 'react';
import Search from './components/Search.js';
import Map from './components/Map.js';
import SearchBar from './components/SearchBar.js';
import Sport from './components/Sport.js';
import Contact from './components/Contact.js';
import "./assests/style.css";

class App extends Component {
  render() {
    return (
      <div>       
        <Search/> 
        <SearchBar/>
        <Map/>        
        <Sport/>
        <Contact/>        
      </div>
    );
  }
}

 export default App;
