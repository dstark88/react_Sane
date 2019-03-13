import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const MapMarker = ({ text }) => (
  <div style={{
    // color: 'white', 
    // background: 'grey',
    // padding: '15px 10px',
    // display: 'inline-flex',
    // textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
 
class SimpleMap extends Component {
 
  render() {
    console.log(this.props.sites);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAoUsjFYl3W9K6s5G6qEhB7et701_uYIk8" }}
          center={this.props.center}
          zoom= {11} 
        >

        {this.props.sites.map(sites => (
          <MapMarker
            lat={sites.Latitude}
            lng={sites.Longitude}
            text={sites["Facility or Program Name"]}
          />
        ))}
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;