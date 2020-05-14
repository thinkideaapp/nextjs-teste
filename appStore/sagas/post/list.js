import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Creators as PostListCreators, Types as PostListTypes } from 'appStore/ducks/post/list';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getPostList() {
	try {
		const response = yield call(api.get, '/posts');
		yield interceptResponse(response);
		yield put(PostListCreators.getSuccess(response.data));
	} catch (err) {
		yield interceptError(PostListCreators.getFailure, err);
	}
}

export default function*() {
	yield all([ takeLatest(PostListTypes.GET_REQUEST, getPostList) ]);
}
