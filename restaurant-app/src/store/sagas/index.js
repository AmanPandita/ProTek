import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/types';

function* fetchCategoriesSaga() {
  try {
    const response = yield call(axios.get, 'https://stream-restaurant-menu-svc.herokuapp.com/category');
    yield put({ type: types.FETCH_CATEGORIES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_CATEGORIES_FAILURE, payload: error.message });
  }
}

function* fetchMenuItemsSaga(action) {
  try {
    const response = yield call(axios.get, `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${action.payload}`);
    yield put({ type: types.FETCH_MENU_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: types.FETCH_MENU_ITEMS_FAILURE, payload: error.message });
  }
}

export default function* rootSaga() {
  yield takeLatest(types.FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
  yield takeLatest(types.FETCH_MENU_ITEMS_REQUEST, fetchMenuItemsSaga);
}
