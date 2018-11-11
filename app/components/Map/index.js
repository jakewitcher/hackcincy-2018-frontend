import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';
import API_KEY from '../../../config_keys';

export default class Maps extends React.PureComponent {
  static defaultProps = {
    center: {
      lat: 39.103119,
      lng: -84.512016,
    },
    zoom: 14,
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.markers.map(location => (
            <Marker
              lat={location.lat}
              lng={location.lng}
              text={location.text}
              key={location.lat + location.lng}
              demand={location.demand}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
