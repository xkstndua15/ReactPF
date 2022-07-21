import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchGallery, fetchMembers, fetchYoutube } from './api';
import * as types from './actionType';

export function* returnGallery(action) {
	try {
		const response = yield call(fetchGallery, action.Opt);
		yield put({
			type: types.GALLERY.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		yield put({ type: types.GALLERY.err, payload: err });
	}
}
export function* callGallery() {
	yield takeLatest(types.GALLERY.start, returnGallery);
}

//youtube saga설정
export function* returnYoutube(action) {
	try {
		const response = yield call(fetchYoutube, action.Opt);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.err, payload: err });
	}
}
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

//members saga설정
export function* returnMembers() {
	try {
		const response = yield call(fetchMembers);
		yield put({ type: types.MEMBERS.success, payload: response.data.members });
	} catch (err) {
		yield put({ type: types.MEMBERS.err, payload: err });
	}
}
export function* callMembers() {
	yield takeLatest(types.MEMBERS.start, returnMembers);
}

//reducer에 적용될 rootSaga생성함수
export default function* rootSaga() {
	yield all([fork(callGallery), fork(callMembers), fork(callYoutube)]);
}
