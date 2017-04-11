import React, { Component } from 'react';
import { Link } from 'react-router'

class Review extends Component {
  render() {
    return (
    <div>
    <div className="container">
        <div className="row">                    
            <div className="col col-sm-12 ">            
              <Link to="/detail"> <button className="btnback">Back</button></Link>              
            </div>                             
        </div>            
     </div>
      <div className="container review">       
        <div className="row">  
            <div className="col col-sm-12 titlename">            
               <h4>johnsmith says</h4>               
            </div>                    
            <div className="col col-sm-12 ">            
               <p class="cmt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Suspendisse et turpis lacinia, congue purus vel, ultrices purus. 
               Integer sed lectus vitae lorem congue vulputate et et ipsum.
               Pellentesque vitae porttitor dolor. Quisque id nibh id orci
               pulvinar ullamcorper. Morbi urna mauris, imperdiet a urna sed,
              varius placerat metus. Donec euismod lectus ligula, id sagittis est
               aliquet sed. Donec malesuada ornare eros ut aliquet. Nullam sollicitudin </p>               
            </div>                             
        </div> 
         <div className="row">  
            <div className="col col-sm-12 titlename ">            
               <h4>johnsmith says</h4>               
            </div>                    
            <div className="col col-sm-12 ">            
               <p class="cmt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               Suspendisse et turpis lacinia, congue purus vel, ultrices purus. 
               Integer sed lectus vitae lorem congue vulputate et et ipsum.
               Pellentesque vitae porttitor dolor. Quisque id nibh id orci
               pulvinar ullamcorper. Morbi urna mauris, imperdiet a urna sed,
              varius placerat metus. Donec euismod lectus ligula, id sagittis est
               aliquet sed. Donec malesuada ornare eros ut aliquet. Nullam sollicitudin </p>               
            </div>                             
        </div>               
     </div>
     </div> 
    );
  }
}

export default Review;