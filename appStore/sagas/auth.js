import {
  call,
  put,
  all,
  takeLatest,
  select,
  take,
  throttle,
} from 'redux-saga/effects';
import Router from 'next/router';

// import { Creators as ProfileCreators } from '../ducks/perfil';
import { removeCookie, getCookie, setCookie } from 'utils/cookie';
import { Creators as AuthCreators, Types as AuthTypes } from '../ducks/auth';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';

function* getLogout() {
  yield call(removeCookie, 'access_token');
  yield call(removeCookie, 'refresh_token');
  yield call(Router.replace, { pathname: '/' });
  yield put(AuthCreators.getLogoutSuccess());
}

export function* callApi(apiCall, trowError = true) {
  const response = yield apiCall;
  const successRequest = yield call(interceptResponse, response, false);
  if (successRequest) {
    return response;
  }
  if (response.status === 401 || response.status === 422) {
    yield put(AuthCreators.getLoginRefreshTokenRequest());
    const action = yield take([
      AuthTypes.GET_REFRESH_TOKEN_SUCCESS,
      AuthTypes.GET_REFRESH_TOKEN_FAILURE,
    ]);
    if (action.type === AuthTypes.GET_REFRESH_TOKEN_FAILURE && trowError) {
      yield put(AuthCreators.getLogoutRequest());
      return;
    }
    const responseTakeTwo = yield apiCall;
    return responseTakeTwo;
  }
  throw response;
}

function* getRefreshToken() {
  const { refresh_token } = yield select(state => state.auth);
  try {
    yield call(api.setHeader, 'Authorization', `Bearer ${refresh_token}`);
    const response = yield call(api.post, '/oauth/refresh');
    if (response.status !== 200) throw response;
    yield call(
      api.setHeader,
      'Authorization',
      `Bearer ${response.data.access_token}`
    );
    yield call(setCookie, 'access_token', response.data.access_token);
    yield call(setCookie, 'refresh_token', response.data.refresh_token);
    yield put(AuthCreators.getLoginRefreshTokenSuccess(response.data));
  } catch (e) {
    if (e.status === 401) {
      yield put(AuthCreators.getLoginRefreshTokenFailure());
    }
  }
}

export default function* () {
  yield all([
    takeLatest(AuthTypes.GET_LOGOUT_REQUEST, getLogout),
    throttle(1000, AuthTypes.GET_REFRESH_TOKEN_REQUEST, getRefreshToken),
  ]);
}
