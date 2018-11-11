import { fromJS, toJS, Map } from 'immutable';

import groceriesJSON from 'assets/fixtures/grocery.json'; //  eslint-disable-line no-console

import {
  SET_CURRENT_PLACE,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
} from './constants';

//  NOTE: App intial state
export const initialState = fromJS({
  currentPlace: false,
  places: false,
  groceries: groceriesJSON,
  success: false,
  error: false,
});

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PLACE:
      return state.set('currentPlace', action.payload);
    case GET_PLACES_SUCCESS:
      return state.set('success', true).set('places', action.payload);
    case GET_PLACES_FAILURE:
      return state.set('success', false).set('error', action.error);
    default:
      return state;
  }
}
