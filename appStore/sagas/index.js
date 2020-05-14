import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import login from './login';

// TODO
import todoList from './todo/list';
import todoDetails from './todo/details';

// POST
import postDetails from './post/details';
import postList from './post/list';

function* rootSaga() {
	yield all([ auth(), fork(login), fork(todoList), fork(todoDetails), fork(postList), fork(postDetails) ]);
}

export default rootSaga;
