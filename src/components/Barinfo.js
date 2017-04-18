import React, { Component } from 'react';
import Barlist from './Barlist.js';


class Barinfo extends Component {

  render() {
    let barlist;
    if(this.props.gettopbar){
      barlist=this.props.gettopbar.map(topbar=>{
      //  console.log(topbar);
        return(
     <Barlist key={topbar.bar_id} topbar={topbar}/>
        );
      });
    }
    //console.log(this.props);
    return (
      <div className="bar">
        <h3>Latest bar </h3>
        {barlist}
      </div>
    );
  }
}
Barinfo.propTypes = {
  Barinfo: React.PropTypes.array
}

export default Barinfo;
