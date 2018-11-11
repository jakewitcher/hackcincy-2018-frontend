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
import Maps from 'components/Map'

export default class MapPage extends React.PureComponent {
  state = {
    markers: [{ lat: 39.109852, lng: -84.515457, text: 'a' }, { lat: 39.299310, lng: -84.452310, text: 'b' }, { lat: 39.204370, lng: -84.377990, text: 'c' }]
  }
  render() {
    return (
      <div>
        <Maps markers={this.state.markers} />
      </div>
    );
  }
}
