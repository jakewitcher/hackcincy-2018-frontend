import { createSelector } from 'reselect';

const selectMapPage = state => state.get('mapPage');

const makeSelectPlaces = () =>
  createSelector(
    selectMapPage,
    placesState => (placesState ? placesState.get('places') : false),
  );

const makeSelectGroceries = () =>
  createSelector(
    selectMapPage,
    placesState =>
      placesState ? placesState.get('groceries').toJS().grocery : false,
  );

export { makeSelectPlaces, makeSelectGroceries };
