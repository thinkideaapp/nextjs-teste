import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  Creators as postsListCreators,
  Types as postsListTypes,
} from 'appStore/ducks/posts/list';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getpostsList() {
  try {
    const response = yield call(api.get, '/posts');
    yield interceptResponse(response);
    yield put(postsListCreators.getSuccess(response.data));
  } catch (err) {
    yield interceptError(postsListCreators.getFailure, err);
  }
}

export default function* () {
  yield all([takeLatest(postsListTypes.GET_REQUEST, getpostsList)]);
}
