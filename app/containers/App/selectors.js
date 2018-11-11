import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');
const selectApp = state => state.get('app');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectCurrentPlace = () =>
  createSelector(
    selectApp,
    appState => (appState ? appState.get('currentPlace') : false),
  );

const makeSelectPlaces = () =>
  createSelector(
    selectApp,
    appState => (appState ? appState.get('places') : false),
  );

const makeSelectGroceries = () =>
  createSelector(
    selectApp,
    appState => (appState ? appState.get('groceries').toJS().grocery : false),
  );

export {
  makeSelectLocation,
  makeSelectPlaces,
  makeSelectGroceries,
  makeSelectCurrentPlace,
};
