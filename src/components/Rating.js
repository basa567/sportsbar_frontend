import React, { Component } from 'react';
import { ButtonToolbar,Glyphicon,ButtonGroup,Button } from 'react-bootstrap';

class Rating extends Component {
  render() {
    return (
      <div className="rating">
        <ButtonToolbar>
        <ButtonGroup>
            <Button bsSize="xsmall"><Glyphicon glyph="star" /></Button>
            <Button bsSize="xsmall"><Glyphicon glyph="star" /></Button>
            <Button bsSize="xsmall"><Glyphicon glyph="star" /></Button>
            <Button bsSize="xsmall"><Glyphicon glyph="star" /></Button>
            <Button bsSize="xsmall"><Glyphicon glyph="star" /></Button>
        </ButtonGroup>
      </ButtonToolbar>
      </div>
    );
  }
}

export default Rating;
