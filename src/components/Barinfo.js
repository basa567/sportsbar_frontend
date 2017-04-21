import React, { Component } from 'react';
import Barlist from './Barlist.js';


class Barinfo extends Component {

  render() {
    let barlist;
    if(this.props.gettopbar){
      barlist=this.props.gettopbar.map(topbar=>{     
        return(
     <Barlist key={topbar.bar_id} topbar={topbar}/>
        );
      });
    }   
    return (
      <div className="bar">
        <h3>Sports bars in Oulu </h3>
        {barlist}
      </div>
    );
  }
}
Barinfo.propTypes = {
  Barinfo: React.PropTypes.array
}

export default Barinfo;
