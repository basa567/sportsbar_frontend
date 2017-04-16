import React, { Component } from 'react';
import $ from 'jquery';
import Barinfo from './Barinfo.js';



class Bar extends Component {
  constructor(){
    super();
    this.state = {
      gettopbar:[]
    }

  }

  getbartop(){
    $.ajax({
      url: 'https://sportsbbar.herokuapp.com/gettopbar',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({gettopbar: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }


  componentWillMount(){

    this.getbartop();

      }

  componentDidMount(){
    this.getbartop();

  }

  render() {
    return (
      <div className="App">

         <Barinfo gettopbar={this.state.gettopbar} />
       </div>
    );
  }
}

export default Bar;
