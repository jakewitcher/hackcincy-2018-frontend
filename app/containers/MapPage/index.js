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
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';

import shelterLocations from 'assets/fixtures/shelter-locations';

//  side effects
import {
  makeSelectPlaces,
  makeSelectGroceries,
} from 'containers/App/selectors';
import { getPlaces, setCurrentPlace } from 'containers/App/actions';
// import reducer from './reducer';
// import saga from './saga';

import Header from 'components/Header';
import List from 'components/List';
import Maps from 'components/Map';
import ShelterListItem from 'components/ShelterListItem';

import Control from './Control';
import Panel from './Panel';
import Toggle from './Toggle';
import Wrapper from './Wrapper';

export class MapPage extends React.PureComponent {
  state = {
    panelActive: true,
    markers: [],
  };

  addProps(places, groceries) {
    return places.map(place => {
      const listSize = Math.floor(Math.random() * 7 + 3);
      const newList = groceries.slice(0, listSize);
      place.focus = false;
      place.groceries = newList.map(item => {
        item.quantity = Math.floor(Math.random() * 18 + 2);
        return item;
      });
      place.demand = place.groceries.reduce(
        (sum, item) => sum + item.quantity,
        0,
      );
      return place;
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.places) {
      this.setState({
        markers: this.addProps(nextProps.places, this.props.groceries),
      });
    }
  }

  componentDidMount() {
    this.props.getPlaces();
  }

  togglePanel = () => {
    this.setState({ panelActive: !this.state.panelActive });
  };

  focusMarker = place => {
    this.setState({
      markers: this.state.markers.map(p => {
        if (p.lat === place) {
          p.focus = true;
          return p;
        }
        return p;
      }),
    });
  };

  resetMarker = place => {
    this.setState({
      markers: this.state.markers.map(p => {
        if (p.lat === place) {
          p.focus = false;
          return p;
        }
        return p;
      }),
    });
  };

  render() {
    console.log('this.props.places: ', this.props.places); //  eslint-disable-line no-console
    console.log('this.props.groceries: ', this.props.groceries); //  eslint-disable-line no-console
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

          <List
            data={this.state.markers}
            Component={ShelterListItem}
            onClick={this.props.setCurrentPlace}
            focusMarker={this.focusMarker}
            resetMarker={this.resetMarker}
          />
        </Panel>
        <Maps
          markers={this.state.markers}
          focusMarker={this.focusMarker}
          resetMarker={this.resetMarker}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  places: makeSelectPlaces(),
  groceries: makeSelectGroceries(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPlaces: () => {
      dispatch(getPlaces());
    },
    setCurrentPlace: placeObj => {
      dispatch(setCurrentPlace(placeObj));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'mapPage', reducer });
// const withSaga = injectSaga({ key: 'mapPage', saga });

MapPage.propTypes = {};

export default compose(
  // withReducer,
  // withSaga,
  withConnect,
)(MapPage);
