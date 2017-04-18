import React, { Component } from 'react';
import { Grid,Row,Col,Thumbnail,Image,Button,wellStyles,Table} from 'react-bootstrap';
import Schedule from './Schedule.js';
import detailimg from './image/detailimg.png';
import { Link } from 'react-router';
import axios from 'axios';



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
     axios.get('https://sportsbbar.herokuapp.com/getschedule')
      .then(response => {
        const scheduleData = response.data;
        console.log('schedules data', scheduleData);
        const nextSchedule = scheduleData.map(scheduleObject => {
          const barId = scheduleObject.bar_id;
          const sportDate = scheduleObject.sport_date;
          const sportTime = scheduleObject.time;
          return {
            barId: barId,
            sportDate: sportDate,
            sportTime: sportTime
          }

        })
        console.log('next schedule',nextSchedule)

        this.setState({
          schedule: nextSchedule
        })
      })
// to get the drink list from api
       var url ="https://sportsbbar.herokuapp.com/getbardrink/"+this.props.params.barid;
       console.log(url);
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
    const drinklength = this.state.drinkinfo.length;
    if(drinklength>0){
        var drink = this.state.drinkinfo.map((drinkdetail, i) => <Drink key={i} data={drinkdetail} />)
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

export default Detail;
