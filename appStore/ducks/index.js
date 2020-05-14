import { combineReducers } from 'redux';

import auth from './auth';
import login from './login';

import { reducer as notifications } from 'react-notification-system-redux';
import todoList from './todo/list';
import todoDetails from './todo/details';

export default combineReducers({
  auth,
  login,
  notifications,
  todo: combineReducers({
    list: todoList,
    details: todoDetails,
  }),
});
