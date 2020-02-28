import { takeEvery, select, call, put } from "redux-saga/effects";
import { store } from "store";

import {
  fetchUsers,
  fetchUsersResponse,
  fetchUsersError
} from "store/modules/users/actions";

import { fetchRequest } from "sagas/api";

export function* fetchUsersWorker() {
  try {
    const response = yield call(fetchRequest, { url: "/users/list" });

    if (response.status === 200) {
      yield put(fetchUsersResponse(response.data.users));
    }
  } catch (error) {
  } finally {
  }
}

export function* conversationsWatcher() {
  yield takeEvery(fetchUsers, fetchUsersWorker);
}

export default conversationsWatcher;
