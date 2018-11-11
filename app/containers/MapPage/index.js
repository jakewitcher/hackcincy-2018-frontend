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
import Maps from 'components/Map';

export default class MapPage extends React.PureComponent {
  state = {
    markers: [
      { lat: 39.109852, lng: -84.515457, text: 'a', demand: 12 },
      { lat: 39.29931, lng: -84.45231, text: 'b', demand: 8 },
      { lat: 39.20437, lng: -84.37799, text: 'c', demand: 4 },
    ],
  };

  render() {
    return (
      <div>
        <Maps markers={this.state.markers} />
      </div>
    );
  }
}
