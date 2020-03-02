import { takeEvery, select, call, put } from "redux-saga/effects";
import { store } from "store";

import { 
  setLoading,
  fetchConversations,
  fetchConversationsResponse,
  fetchConversationsError
} from "store/modules/conversations/actions";

import { fetchRequest } from "sagas/api";

export function* fetchConversationsWorker() {
  try {
    yield put(setLoading(true));

    const response = yield call(fetchRequest, { url: "/conversations/list" });

    if (response.status === 200) {
      yield put(fetchConversationsResponse(response.data.conversations));
    }

  } catch (error) {

    yield put(fetchConversationsError(error.response.data));

  } finally {
    yield put(setLoading(false));
  }
}

export function* conversationsWatcher() {
  yield takeEvery(fetchConversations, fetchConversationsWorker);
}

export default conversationsWatcher;
