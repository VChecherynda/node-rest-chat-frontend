import { takeEvery, select, call, put } from "redux-saga/effects";
import { store } from "store";

import { getToken, getUserId } from "store/modules/auth/selectors";

import {
  setLoading,
  fetchUsers,
  fetchUsersResponse,
  fetchUsersError
} from "store/modules/users/actions";

import { fetchRequest } from "sagas/api";

export function* fetchUsersWorker() {
  try {
    yield put(setLoading(true));

    const token = yield select(getToken);

    const response = yield call(fetchRequest, { 
      url: "/users/list",
      headers: { authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      yield put(fetchUsersResponse(response.data.users));
    }
  } catch (error) {

    yield put(fetchUsersError(error.response.data));

  } finally {
    yield put(setLoading(false));
  }
}

export function* conversationsWatcher() {
  yield takeEvery(fetchUsers, fetchUsersWorker);
}

export default conversationsWatcher;
