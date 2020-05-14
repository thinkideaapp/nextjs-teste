import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Creators as TodoDetailsCreators, Types as TodoDetailsTypes } from 'appStore/ducks/todo/details';
import api from 'services/api';
import interceptResponse from 'services/interceptResponse';
import interceptError from 'services/interceptError';

function* getTodoDetails({ payload }) {
	const { id } = payload;
	try {
		const response = yield call(api.get, `/todos/${id}`);
		yield interceptResponse(response);
		yield put(TodoDetailsCreators.getSuccess(response.data));
	} catch (err) {
		yield interceptError(TodoDetailsCreators.getFailure, err);
	}
}

export default function*() {
	yield all([ takeLatest(TodoDetailsTypes.GET_REQUEST, getTodoDetails) ]);
}
