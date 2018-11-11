import {
  SET_CURRENT_PLACE,
  GET_PLACES,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
} from './constants';

/**
 * Grab all campaigns of current advertiser
 *
 * @param  {integer} advertiser_id id for the advertiser of which we want to grab all campaigns for
 *
 * @return {object}    An action object with a type of GET_ADVERTISER
 */
export function setCurrentPlace(placeObj) {
  return {
    type: SET_CURRENT_PLACE,
    payload: placeObj,
  };
}

/**
 * Grab all campaigns of current advertiser
 *
 * @param  {integer} advertiser_id id for the advertiser of which we want to grab all campaigns for
 *
 * @return {object}    An action object with a type of GET_ADVERTISER
 */
export function getPlaces() {
  return { type: GET_PLACES };
}

/**
 * Grabbing all campaigns of current advertiser succeeded
 *
 * @param  {integer} advertiser_id id for the advertiser of which we want to grab all campaigns for
 * @param  {array} data array of the campaigns for the specified advertiser
 *
 * @return {object}    An action object with a type of GET_CAMPAIGNS_SUCCESS
 */
export function getPlacesSuccess(data) {
  return {
    type: GET_PLACES_SUCCESS,
    payload: data,
  };
}

/**
 * Grabbing all campaigns of current advertiser failed
 *
 * @param  {object} error error from the server/buzz
 *
 * @return {object}    An action object with a type of GET_CAMPAIGNS_FAILURE
 */
export function getPlacesFailure(error) {
  return {
    type: GET_PLACES_FAILURE,
    error,
  };
}
