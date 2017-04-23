import React, { Component } from 'react';
import $ from 'jquery';
 import { Grid,Row,Col,Thumbnail,Image,Button,wellStyles,Table} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router';




class Detail extends Component {

   constructor(props) {
          super(props);
          this.state = {
            drinkinfo:[],

            bardetail:[],

            schedule: []

          };
      }

   componentDidMount() {


    //  to get the schedule data from api
    var url ="https://sportsbbar.herokuapp.com/getsportbytoday/"+this.props.params.barid;    
     axios.get(url)
      .then(response => {
        const scheduleData = response.data;        
        const nextSchedule = scheduleData.map(scheduleObject => {
          const barId = scheduleObject.bar_id;
          var today = new Date();
          var dd = today.getDate();
          var mm = today.getMonth()+1;
          var yyyy = today.getFullYear();
          const sportDate =  mm+'/'+dd+'/'+yyyy;
          const sportTime = scheduleObject.time;
          const sportId = scheduleObject.sport_id;
          const sportName = scheduleObject.sportname;
          return {
            barId: barId,
            sportDate: sportDate,
            sportTime: sportTime,
            sportId: sportId,
            sportName:sportName
          }

        })

        this.setState({
          schedule: nextSchedule
        })
      })
// to get the drink list from api

       var url ="https://sportsbbar.herokuapp.com/getbardrink/"+this.props.params.barid;
          this.api = {
              getdrink(){
                  return fetch(url).then((res)=>res.json());
              }
          };

       this.api.getdrink().then((res)=>{


          this.setState({
            drinkinfo:res
            });
         })

         var barurl ="https://sportsbbar.herokuapp.com/getonebar/"+this.props.params.barid;
         $.ajax({
           url: barurl,
           dataType:'json',
           cache: false,
           success: function(data){
             this.setState({bardetail: data}, function(){               
             });
           }.bind(this),
           error: function(xhr, status, err){
             console.log(err);
           }
         });
         
       }


  render() {
    // for drink
    const drinklength = this.state.drinkinfo.length;
    if(drinklength>0){
        var drink = this.state.drinkinfo.map((drinkdetail, i) => <Drink key={i} data={drinkdetail} />)
    }
    // for Schedule
    const scheduleLength = this.state.schedule.length;
    if(scheduleLength >0){
      var schedule = this.state.schedule.map((scheduleDetail, i) => <Schedule key={i} data={scheduleDetail}/>)
    }
    //for bar
    const barlength = this.state.bardetail.length;   
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
          {schedule}
          <div className="Drink">
                  <div className="Drink-title">
                    <h2>Drink list</h2>
                  </div>
                  <Grid>
                    <Row>
                     {drink}
                  </Row>
                </Grid>
            </div>
         <Grid>
             <Row>
            <Col  md={12} mdpull={12}  >
           <div className="sch_btn" >
              <Link to={"rating/"+this.props.params.barid}> <Button bsStyle="customrating" bsSize="large" block>Give Your Views & Rating</Button></Link>
               <Link to={"review/"+this.props.params.barid}><Button bsStyle="customreview" bsSize="large" block>See Review</Button></Link>          </div>
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
                <div >
                 <Col  md={12} mdpull={12}  >
                        <Table responsive>
                         
                          <tbody>                            
                              <tr>
                              <td className="drinkname">{this.props.data.drinkname}</td>
                              <td className="price">{this.props.data.price}€</td>
                             </tr>                           
                          </tbody>
                        </Table>
                      </Col>
                           
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
                   <Col xs={12} md={12} >
                      <Image className="detailimg" src={require("./image/" + this.props.bardata.image)}  responsive />
                  </Col>
                        <Col xs={12} md={12} >
                          <div className="detail-list">
                            <p className="dtitle"><b>{this.props.bardata.barname}</b></p>
                            <p className="dlocation">Location: {this.props.bardata.address}</p>
                         </div>
                       </Col>
                     </div>
                      </Row>
                    </Grid>
                 </div>
             )
         }
  }

 class Schedule extends Component {
   constructor(props) {
   super(props);
   this._volleyball = this._volleyball.bind(this);  
 }
 _volleyball(){
     $(this.refs['volleyball']).slideToggle();
 }
render() { 
  
  return (
    <div className="Schedule">
      <Grid>
        <Row>        
            <Col  md={12} mdpull={12}  >              
              <div className="sch_btn" >
                  <Button bsStyle="custom" bsSize="large" onClick={this._volleyball} block>{this.props.data.sportName}</Button>
                  <div ref="volleyball">                                    
                    <p><b>Timetable:{this.props.data.sportTime}</b></p>
                    <p><b>Date:{this.props.data.sportDate}</b> </p>
                    </div>          
              </div>
          </Col>
      </Row>
    </Grid>
  </div>
      );
   }
 }


export default Detail;
