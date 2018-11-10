/*
 * MapPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
/* eslint-disable react/prefer-stateless-function */
export default class MapPage extends React.PureComponent {
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
          bootstrapURLKeys={{ key: 'AIzaSyD_l96qafgvKgE1b-cLSw4Zuh1h-bapTqI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.103119}
            lng={-84.512016}
            text={'Cincinnati'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
