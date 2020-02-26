import { takeEvery, select, call, put } from "redux-saga/effects";

import { addMessage } from "../store/modules/message/actions";

// eslint-disable-next-line consistent-return
export function* addMessageWorker() {
  try {
  } catch (error) {
  } finally {
  }
}

export function* messageWatcher() {
  yield takeEvery(addMessage, addMessageWorker);
}

export default messageWatcher;
