import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import login from './login';
import todoList from './todo/list';
import todoDetails from './todo/details';
import postsList from './posts/list';
import postsDetails from './posts/details';


function* rootSaga() {
  yield all([auth(), fork(login), fork(todoList), fork(todoDetails),
    fork(postsList), fork(postsDetails)]);
}

export default rootSaga;
