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

import HomePage from 'containers/HomePage/Loadable';
import MapPage from 'containers/MapPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import MenuLink from 'components/MenuLink';

import HeaderIcon from './HeaderIcon';
import HeaderMenu from './HeaderMenu';
import HeaderWrapper from './HeaderWrapper';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <HeaderWrapper>
        <HeaderIcon>
          <MenuLink to="/">Logo</MenuLink>
        </HeaderIcon>
        <HeaderMenu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/map">Map</MenuLink>
        </HeaderMenu>
      </HeaderWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/map" component={MapPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
