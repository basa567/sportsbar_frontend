import React, { Component } from 'react';
import Search from './components/Search.js';
import Map from './components/Map.js';
import Bar from './components/Bar.js';
import Sport from './components/Sport.js';
import Contact from './components/Contact.js';
import "./assests/style.css";

class App extends Component {
  render() {
    const location = {
      lat: 65.0123600,
      lng:  25.4681600
    }

    const markers = [
      {
        location: {
          lat: 65.0123600,
          lng: 25.4681600
        }
      }
    ]

    return (
      <div>
        <Search/>
        <div style={{width:'100 %', height:500}}>
          <Map center={location} markers={markers}/>
        </div>
        <Bar/>
        <Sport/>
        <Contact/>
      </div>
    );
  }
}

 export default App;
