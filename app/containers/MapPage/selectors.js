import { createSelector } from 'reselect';

const selectMapPage = state => state.get('mapPage');

const makeSelectPlaces = () =>
  createSelector(
    selectMapPage,
    placesState => (placesState ? placesState.get('places') : false),
  );

export { makeSelectPlaces };
