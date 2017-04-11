import React, { Component } from 'react';
import { Grid,Row,Col,Table} from 'react-bootstrap';

import '../assests/detail.css';

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

        <td>beer</td>
        <td>25</td>
      </tr>
      <tr>

        <td>beer</td>
        <td>25</td>
      </tr>
      <tr>

        <td>beer</td>
        <td>25</td>
      </tr>
    </tbody>
  </Table>
        </Col>

    </Row>
  </Grid>
      </div>

    );
  }
}

export default Drink;
