import React, { Component } from 'react';
import Search from './components/Search.js';
import Map from './components/Map.js';
import Bar from './components/Bar.js';
import Detail from './components/Detail.js';
import Schedule from './components/Schedule.js';
import Drink from './components/Drink.js';
import AddReview from './components/AddReview.js';
import Comment from './components/Comment.js';
import barimg from './components/Image/barimg.png';
import Sport from './components/Sport.js';
import Contact from './components/Contact.js';
import Rating from './components/Rating.js';
import suman from './components/Image/suman.png';
import detailimg from './components/Image/detailimg.png';
import $ from 'jquery';
import "./assests/style.css";
import './assests/contact.css';
import './assests/detail.css';


class App extends Component {
  render() {

    return (
      <div>
        <Bar/>
        <Contact />
        <Detail />
        <Schedule />
        <AddReview />
        <Comment />
        <Search/>
        <Map/>
        <Sport/>

      </div>
    );
  }
}

 export default App;
