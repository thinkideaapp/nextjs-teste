import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import login from './login';
import todoList from './todo/list';
import todoDetails from './todo/details';
import postList from './post/list';
import postDetails from './post/details';
import postComments from './post/comments';

function* rootSaga() {
  yield all([
    auth(),
    fork(login),
    fork(todoList),
    fork(todoDetails),
    fork(postList),
    fork(postDetails),
    fork(postComments),
  ]);
}

export default rootSaga;
