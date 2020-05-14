import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import login from './login';
import todoList from './todo/list';
import todoDetails from './todo/details';

function* rootSaga() {
  yield all([auth(), fork(login), fork(todoList), fork(todoDetails)]);
}

export default rootSaga;
