import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  Creators as PostDetailsCreators,
  Types as PostDetailsTypes,
} from 'appStore/ducks/post/details';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getPostDetails({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/posts/${id}`);
    yield interceptResponse(response);
    yield put(PostDetailsCreators.getSuccess(response.data));
  } catch (err) {
    yield interceptError(PostDetailsCreators.getFailure, err);
  }
}

export default function* () {
  yield all([takeLatest(PostDetailsTypes.GET_REQUEST, getPostDetails)]);
}
