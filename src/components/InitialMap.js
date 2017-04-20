import React, { Component } from 'react';
import axios from 'axios';
import {withGoogleMap, GoogleMap, InfoWindow, Marker} from 'react-google-maps';
import { Link } from 'react-router'

const InitialMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={16}
      defaultCenter={{ lat:65.0123600, lng:25.4681600}}
      onClick={props.onMapClick}
    >
     {props.markers.map((marker, index) =>(
       <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
       >
       {marker.showInfo && (
         <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
         {
            <div id="infoWindow" >
            <div className="panel panel-info">
    <div className="panel-heading"><h3>{marker.barName}</h3></div>
    <div className="panel-body"><p>{marker.address}</p></div>
    <div className="panel-footer"><Link to={"detail/"+marker.barID } className="seeMore"> See more..</Link></div>
  </div>
            </div>
         }
         </InfoWindow>
       )}
       </Marker>
     ))}
     </GoogleMap>
  )
})

export default InitialMap;
