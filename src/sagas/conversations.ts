import { takeEvery, select, call, put } from "redux-saga/effects";
import { store } from "store";

import { fetchConversations } from "store/modules/conversations/actions";

import { fetchRequest } from "sagas/api";

export function* fetchConversationsWorker() {
  try {
    const response = yield call(fetchRequest, { url: "/conversations/list" });

    console.log('[fetchConversations response]', response)

  } catch (error) {
    console.log('[fetchConversations error]', error)
  } finally {
  }
}

export function* conversationsWatcher() {
  yield takeEvery(fetchConversations, fetchConversationsWorker);
}

export default conversationsWatcher;
