/**
 * Sagas for:
 *  1. fetchCampaigns - grab all campaigns of the given advertiser id
 *
 */

import {
  call,
  take,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects'; // eslint-disable-line no-unused-vars
import request from 'utils/request';

import { GET_PLACES } from './constants';

import { getPlacesSuccess, getPlacesFailure } from './actions';

/**
 * A GET api call
 *
 * @param  {object} action
 *
 * @return {object}    An action object with a type of LOAD_METRIC
 */

export function* fetchPlaces(action) {
  const requestURL = '/places';
  // console.log(requestURL, "action: ", action); //  eslint-disable-line no-console
  // console.log('container/campaignPage/saga.js     login:requestBody ', requestBody); //  eslint-disable-line no-console

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    console.log('fetchCampaigns:response ', response); //  eslint-disable-line no-console

    if (response.success) {
      yield put(getPlacesSuccess(response.payload));
    } else {
      yield put(
        getPlacesFailure({
          message:
            'An ambiguous error appeared, when hitting Buzz to grab Places of the given campaign id',
        }),
      );
    }
  } catch (err) {
    yield put(getPlacesFailure(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* campaignData() {
  // Watches for GET_CAMPAIGNS action and calls fetchCampaigns when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount

  yield takeLatest(GET_PLACES, fetchPlaces);
}
