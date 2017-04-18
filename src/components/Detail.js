import React, { Component } from 'react';
import $ from 'jquery';
 import { Grid,Row,Col,Thumbnail,Image,Button,wellStyles,Table} from 'react-bootstrap';
import Schedule from './Schedule.js';
import axios from 'axios';


import detailimg from './image/detailimg.png';
import { Link } from 'react-router'


class Detail extends Component {

   constructor(props) {
          super(props);
          this.state = {
            drinkinfo:[],
            bardetail:[]
          };
      }

   componentDidMount() {
       var url ="https://sportsbbar.herokuapp.com/getbardrink/"+this.props.params.barid;
          this.api = {
              getdrink(){
                  return fetch(url).then((res)=>res.json());
              }
          };

       this.api.getdrink().then((res)=>{
         drinkinfo:res
          this.setState({
            });
         })

         var barurl ="https://sportsbbar.herokuapp.com/getonebar/"+this.props.params.barid;
         $.ajax({
           url: barurl,
           dataType:'json',
           cache: false,
           success: function(data){
             this.setState({bardetail: data}, function(){
               console.log(this.state);
             });
           }.bind(this),
           error: function(xhr, status, err){
             console.log(err);
           }
         });
         console.log(this.state.bardetail);
       }


  render() {
    const drinklength = this.state.drinkinfo.length;
  if(drinklength>0){
      var drink = this.state.drinkinfo.map((drinkdetail, i) =>
      <Drink key={i} data={drinkdetail} />)
  }

    const barlength = this.state.bardetail.length;
    console.log(barlength);
    if(barlength>0){
        var bar = this.state.bardetail.map((bardetail, i) => <Bardetail key={i} bardata={bardetail} />)
    }
    return (

    <div>

      <div className="detail">
          <Grid>
             <Row>
               {bar}
             </Row>
           </Grid>
        </div>
          <Schedule/>
          {drink}

         <Grid>
             <Row>
            <Col  md={12} mdpull={12}  >
           <div className="sch_btn" >
               <Button bsStyle="customrating" bsSize="large" block>Give Your Views & Rating</Button>
                 <Button bsStyle="customreview" bsSize="large" block>See Review</Button>
            </div>
           </Col>
             </Row>
            </Grid>
          </div>
    );
  }
}

class Drink extends Component {
        render() {
            return (
                <div className="Drink">
                  <div className="Drink-title">
                    <h2>Drink list</h2>
                  </div>
                  <Grid>
                    <Row>
                      <Col  md={6} mdpull={6}  >
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Drink</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{this.props.data.drinkname}</td>
                              <td>{this.props.data.price}</td>
                            </tr>

                          </tbody>
                        </Table>
                      </Col>
                  </Row>
                </Grid>
            </div>
            )
        }
 }

 class Bardetail extends Component {
         render() {
             return (
               <div className="detail">
                   <Grid>
                      <Row>
                       <div className="detailname">
                   <Col xs={12} md={6} >
                      <Image className="detailimg" src={require("./image/" + this.props.bardata.image)}  responsive />
                  </Col>
                        <Col xs={6} md={6} >
                          <div className="detail-list">
                            <p><b>{this.props.bardata.barname}</b></p>
                            <p>location:{this.props.bardata.address}  </p>


                         </div>
                       </Col>
                     </div>
                      </Row>
                    </Grid>
                 </div>
             )
         }
  }
export default Detail;
