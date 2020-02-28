import { takeEvery, select, call, put } from "redux-saga/effects";

import {
  fetchUsers,
  fetchUsersResponse,
  fetchUsersError
} from "store/modules/users/actions";

export function* fetchUsersWorker() {
  try {
  } catch (error) {
  } finally {
  }
}

export function* conversationsWatcher() {
  yield takeEvery(fetchUsers, fetchUsersWorker);
}

export default conversationsWatcher;
