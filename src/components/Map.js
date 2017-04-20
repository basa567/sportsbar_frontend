import InitialMap from './InitialMap.js'
import axios from 'axios';
import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';

class Map extends Component {
  constructor(props){
    super(props);

    this.state = {
      markers: [],
      formValue: ''
    }

     this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
     this.handleMarkerClick = this.handleMarkerClick.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleMarkerClose = this.handleMarkerClose.bind(this);

  }
  componentDidMount(){
    axios.get('https://sportsbbar.herokuapp.com/')
      .then(response => {
        const markerData = response.data;
        console.log(response.data)
        const nextMarkers = markerData.map(markerObject => {
          const latLng = {lat: Number(markerObject.latitude), lng: Number(markerObject.longitude)};
          const barName = markerObject.barname;
          const address = markerObject.address ? markerObject.address: null;
          const barID = markerObject._id;
          console.log(barID)
          return {
            barName: barName,
            position: latLng,
            address: address,
            barID: barID
          }
        })
        this.setState({
          markers: nextMarkers
        })
      })
  }



  handleChange(event){
    this.setState({formValue: event.target.value})
  }

  handleMarkerRightClick(targetMarker){
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers
    });
  }

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if(marker === targetMarker) marker.showInfo = true;
        return marker;
      })
    })
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if(marker === targetMarker) marker.showInfo = false
        return marker;
      }),
    })
  }

  render() {
    return (
      <div>
      <div style={{height: '100%'}}>
      <InitialMap
        containerElement={
          <div style={{height: '100vh', width: '100vw'}} />
        }
        mapElement={
          <div style={{height: '100vh', width: '100vw'}} />
        }
        markers={this.state.markers}
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        onMarkerRightClick={this.handleMarkerRightClick}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
      </div>
      </div>
    );
  }
}

export default Map;
