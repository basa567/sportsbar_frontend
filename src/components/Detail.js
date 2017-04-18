import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Image,Button,wellStyles,Table} from 'react-bootstrap';
import detailimg from './image/detailimg.png';
import { Link } from 'react-router';
import axios from 'axios';
import $ from 'jquery';



class Detail extends Component {

   constructor(props) {
          super(props);
          this.state = {
            drinkinfo:[],
            schedule: []
          };
      }

   componentDidMount() {

    //  to get the schedule data from api
    var url ="https://sportsbbar.herokuapp.com/getsportbytoday/"+this.props.params.barid;
    console.log(url);
     axios.get(url)
      .then(response => {
        const scheduleData = response.data;
        console.log('schedules data', scheduleData);
        const nextSchedule = scheduleData.map(scheduleObject => {
          const barId = scheduleObject.bar_id;
          const sportDate = scheduleObject.sport_date;
          const sportTime = scheduleObject.time;
          const sportId = scheduleObject.sport_id;
          return {
            barId: barId,
            sportDate: sportDate,
            sportTime: sportTime,
            sportId: sportId
          }

        })
        console.log('next schedule',nextSchedule)

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
    return (
    <div>
      <div className="detail">
          <Grid>
             <Row>
              <div className="detailname">
          <Col xs={12} md={8} >
             <Image className="detailimg" src={detailimg} responsive />
         </Col>
               <Col xs={6} md={4} >
                 <div className="detail-list">
                   <h3>Barname</h3>
                   <p>location: </p>
                   <p>Working hours:</p>
                   <p>Rating:</p>
                </div>
              </Col>
            </div>
             </Row>
           </Grid>
        </div>
          {schedule}
          {drink}
         <Grid>
             <Row>
            <Col  md={12} mdpull={12}  >
           <div className="sch_btn" >

              <Link to={"rating/"+this.props.params.barid}> <Button bsStyle="customrating" bsSize="large" block>Give Your Views & Rating</Button></Link>
               <Link to={"review/"+this.props.params.barid}><Button bsStyle="customreview" bsSize="large" block>See Review</Button></Link>

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

 class Schedule extends Component {
   constructor(props) {
   super(props);
   this._volleyball = this._volleyball.bind(this);
   this._basketball = this._basketball.bind(this);
   this._football = this._football.bind(this);
 }
 _volleyball(){
     $(this.refs['volleyball']).slideToggle();
 }
 _basketball() {
   $(this.refs['basketball']).slideToggle();
 }
 _football(){
     $(this.refs['football']).slideToggle();
 }


   render() {
    //  if(this.props.data.sportId === '58e5075c7b55f10004e7cb9c'){
    //     var hockey = [];
    //
    //  }
     return (
  <div className="Schedule">
     <Grid>
       <Row>
          <Col  md={6} mdpull={6}  >
            <div className="sch-title">
              <h2>Sport Schedule</h2>
            </div>
            <div className="sch_btn" >
                 <Button bsStyle="custom" bsSize="large" onClick={this._volleyball} block>Volleyball</Button>
                 <div ref="volleyball">
                   <p>{this.props.data.sportDate}</p>
                   <p>{this.props.data.sportTime}</p>
                   </div>
                 <Button bsStyle="custom" bsSize="large" onClick={this._basketball} block>Basketball</Button>
                 <div ref="basketball">
                  <p>{this.props.data.sportDate}</p>
                   <p>{this.props.data.sportTime}</p>
                   </div>
                 <Button bsStyle="custom" bsSize="large" onClick={this._football} block>Football</Button>
                 <div ref="football">
                 <p>{this.props.data.sportDate}</p>
                  <p>{this.props.data.sportTime}</p>
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
