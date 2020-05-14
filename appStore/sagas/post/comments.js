import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  Creators as PostCommentsCreators,
  Types as PostCommentsTypes,
} from 'appStore/ducks/post/comments';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getPostComments({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/posts/${id}/comments`);
    yield interceptResponse(response);
    yield put(PostCommentsCreators.getSuccess(response.data));
  } catch (err) {
    yield interceptError(PostCommentsCreators.getFailure, err);
  }
}

export default function* () {
  yield all([takeLatest(PostCommentsTypes.GET_REQUEST, getPostComments)]);
}
