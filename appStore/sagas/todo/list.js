import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
  Creators as TodoListCreators,
  Types as TodoListTypes,
} from 'appStore/ducks/todo/list';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getTodoList() {
  try {
    const response = yield call(api.get, '/todos');
    yield interceptResponse(response);
    yield put(TodoListCreators.getSuccess(response.data));
  } catch (err) {
    yield interceptError(TodoListCreators.getFailure, err);
  }
}

export default function* () {
  yield all([takeLatest(TodoListTypes.GET_REQUEST, getTodoList)]);
}
