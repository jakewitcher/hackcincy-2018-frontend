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

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

//  utils
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import shelterLocations from 'assets/fixtures/shelter-locations';

import Header from 'components/Header';
import List from 'components/List';
import Maps from 'components/Map';
import ShelterListItem from 'components/ShelterListItem';

import Control from './Control';
import Panel from './Panel';
import Toggle from './Toggle';
import Wrapper from './Wrapper';

//  side effects
import { makeSelectPlaces } from './selectors';
import { getPlaces } from './actions';
import reducer from './reducer';
import saga from './saga';

export class MapPage extends React.PureComponent {
  state = {
    panelActive: true,
    markers: [
      { lat: 39.109852, lng: -84.515457, text: 'a', demand: 12 },
      { lat: 39.29931, lng: -84.45231, text: 'b', demand: 8 },
      { lat: 39.20437, lng: -84.37799, text: 'c', demand: 4 },
    ],
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.places) {
      this.setState({ markers: nextProps.places });
    }
  }

  componentDidMount() {
    this.props.getPlaces();
  }

  togglePanel = () => {
    this.setState({ panelActive: !this.state.panelActive });
  };

  render() {
    console.log('this.props.places: ', this.props.places); //  eslint-disable-line no-console
    return (
      <Wrapper>
        {!this.state.panelActive && (
          <Toggle className="left" onClick={this.togglePanel}>
            <i className="fal fa-chevron-right" />
          </Toggle>
        )}
        <Panel className={this.state.panelActive ? 'active' : ''}>
          <Control>
            <Header>Pantry Locations</Header>
            <Toggle className="right" onClick={this.togglePanel}>
              <i className="fal fa-chevron-left" />
            </Toggle>
          </Control>

          <List data={this.props.places} Component={ShelterListItem} />
        </Panel>
        <Maps markers={this.state.markers} />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  places: makeSelectPlaces(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPlaces: () => {
      dispatch(getPlaces());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mapPage', reducer });
const withSaga = injectSaga({ key: 'mapPage', saga });

MapPage.propTypes = {};

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MapPage);
