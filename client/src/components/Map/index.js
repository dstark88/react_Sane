import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./style.css";

const MapMarker = () => (
  <div className="styled-marker">
  </div>
);

class MultipleSitesMap extends Component {

//   onMarkerClick = (event) => {
//     console.log("marker clicked");
//     this.props.onMarkerClicked({
//         site: event.target.src,
//         site: event.target.id,
//     });
// };

  render() {
    // console.log(this.props.sites);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%', marginBottom: "15px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBcs9lfkH6hl5Uov4eG2JhYHjoZceCgNnc" }}
          center={this.props.center}
          zoom={10}
        >

          {this.props.sites.map(sites => (
            <MapMarker
              key={sites.latitude}
              lat={sites.latitude}
              lng={sites.longitude}
            />
          ))}

        </GoogleMapReact>
      </div>
    );
  }
}

export default MultipleSitesMap;