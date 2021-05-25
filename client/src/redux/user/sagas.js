import { call, put, takeLatest } from "redux-saga/effects";

import * as httpUser from "../../http/user";

import { actions as types } from "./index";

function* onGetUsers() {
  try {
    const result = yield call(httpUser.getUsers);

    yield put(types.getUsersSuccess(result.data));
  } catch (error) {
    console.log(error);
    yield put(types.getUsersFailure());
  }
}

const authSagas = [takeLatest(types.getUsersRequest, onGetUsers)];

export default authSagas;
