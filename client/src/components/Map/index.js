import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./style.css";

const MapMarker = () => (
  <div className="styled-marker">
  </div>
);

class SimpleMap extends Component {

  render() {
    // console.log(this.props.sites);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%', marginBottom: "15px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAoUsjFYl3W9K6s5G6qEhB7et701_uYIk8" }}
          center={this.props.center}
          zoom={10}
        >

          {this.props.sites.length > 1 ? (
            <>
            {this.props.sites.map(sites => (
                <MapMarker
                  lat={sites.Latitude}
                  lng={sites.Longitude}
                  onClick={this.props.handleClick}
                />
              ))}
            </>
          ) : (
            <MapMarker 
              lat={this.props.sites.Latitude}
              lng={this.props.sites.Longitude}
            />
          )}


        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;