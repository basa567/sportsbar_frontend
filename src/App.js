import React, { Component } from 'react';
import Search from './components/Search.js';
import Navigation from './components/Navigation.js';
import Bar from './components/Bar.js';
import Sport from './components/Sport.js';
import Contact from './components/Contact.js';
import "./assests/style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Navigation/>
        <Bar/>
        <Sport/>   
        <Contact/>     
      </div>
    );
  }
}

export default App;
