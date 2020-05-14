import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import { reducer as notifications } from 'react-notification-system-redux';
import todoList from './todo/list';
import todoDetails from './todo/details';
import postList from './post/list';
import postDetails from './post/details';
import postComments from './post/comments';

export default combineReducers({
  auth,
  login,
  notifications,
  post: combineReducers({
    list: postList,
    details: postDetails,
    comments: postComments,
  }),
  todo: combineReducers({
    list: todoList,
    details: todoDetails,
  }),
});
