import { createSelector } from 'reselect';

const selectPlaces = state => state.get('places');

const makeSelectPlaces = () =>
  createSelector(
    selectPlaces,
    placesState => (placesState ? placesState.get('places') : false),
  );

export { makeSelectPlaces };
