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
        <div className="container titletopbar">
           <div className="row">
              <div className="col col-lg-12">
                  <h3 >Top Sports Bar </h3>
                </div>                 
            </div>
        </div>        
        {barlist}
      </div>
    );
  }
}
Barinfo.propTypes = {
  Barinfo: React.PropTypes.array
}

export default Barinfo;
