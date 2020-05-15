import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  Creators as postsDetailsCreators,
  Types as postsDetailsTypes,
} from 'appStore/ducks/posts/details';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getpostsDetails({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/posts/${id}`);
    yield interceptResponse(response);
    yield put(postsDetailsCreators.getSuccess(response.data));
  } catch (err) {
    yield interceptError(postsDetailsCreators.getFailure, err);
  }
}

export default function* () {
  yield all([takeLatest(postsDetailsTypes.GET_REQUEST, getpostsDetails)]);
}
