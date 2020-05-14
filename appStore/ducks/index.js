import { combineReducers } from 'redux';

import auth from './auth';
import login from './login';

import { reducer as notifications } from 'react-notification-system-redux';

// TODO LIST
import todoList from './todo/list';
import todoDetails from './todo/details';

// POST LIST
import postList from './post/list';
import postDetails from './post/details';

export default combineReducers({
	auth,
	login,
	notifications,
	todo: combineReducers({
		list: todoList,
		details: todoDetails
	}),
	post: combineReducers({
		list: postList,
		details: postDetails
	})
});
