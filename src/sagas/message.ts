import { takeEvery, select, call, put } from "redux-saga/effects";

import { addMessage } from "store/modules/messages/actions";

export function* addMessageWorker() {
  try {
  } catch (error) {
  } finally {
  }
}

export function* messagesWatcher() {
  yield takeEvery(addMessage, addMessageWorker);
}

export default messagesWatcher;
