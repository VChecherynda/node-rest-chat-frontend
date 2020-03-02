import { takeEvery, select, call, put } from "redux-saga/effects";

import { 
  setLoading,
  fetchMessages,
  fetchMessagesResponse,
  fetchMessagesError,
  addMessage,
  addMessageResponse,
  addMessageError
} from "store/modules/messages/actions";

import { fetchRequest } from "sagas/api";

interface PayloadProps {
  payload: string
}

export function* fetchMessagesWorker({ payload }: PayloadProps) {
  try {
    yield put(setLoading(true));

    const response = yield call(fetchRequest, { url: `/messages/list/${payload}` });
    
    if (response.status === 200) {
      yield put(fetchMessagesResponse(response.data.messages));
    }

  } catch (error) {

    yield put(fetchMessagesError(error.response.data));

  } finally {
    yield put(setLoading(false));
  }
}

export function* addMessageWorker() {
  try {
  } catch (error) {
  } finally {
  }
}

export function* messagesWatcher() {
  yield takeEvery(fetchMessages, fetchMessagesWorker);
  yield takeEvery(addMessage, addMessageWorker);
}

export default messagesWatcher;
