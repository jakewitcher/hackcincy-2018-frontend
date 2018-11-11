/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

//  utils
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ConfirmationPage from 'containers/ConfirmationPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import MapPage from 'containers/MapPage/Loadable';
import GroceryPage from 'containers/GroceryPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import MenuLink from 'components/MenuLink';

import {
  // makeSelectPlaces,
  // makeSelectGroceries,
  makeSelectLocation,
} from './selectors';

import AppWrapper from './AppWrapper';
import Content from './Content';
import HeaderIcon from './HeaderIcon';
import HeaderMenu from './HeaderMenu';
import HeaderWrapper from './HeaderWrapper';

import reducer from './reducer';
import saga from './saga';

import GlobalStyle from '../../global-styles';

export function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <HeaderIcon>
          <MenuLink to="/">The Pantry</MenuLink>
        </HeaderIcon>
        <HeaderMenu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/map">Map</MenuLink>
          <MenuLink to="/confirmation">Confirmation</MenuLink>
          <MenuLink to="/grocery">Grocery</MenuLink>
        </HeaderMenu>
      </HeaderWrapper>
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/confirmation" component={ConfirmationPage} />
          <Route exact path="/grocery" component={GroceryPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Content>
      <GlobalStyle />
    </AppWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  // places: makeSelectPlaces(),
  // groceries: makeSelectGroceries(),
});

function mapDispatchToProps(dispatch) {
  return {
    // getPlaces: () => {
    //   dispatch(getPlaces());
    // },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

App.propTypes = {};

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
