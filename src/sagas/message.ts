import { takeEvery, select, call, put } from "redux-saga/effects";

import { 
  setLoading,
  fetchMessages,
  fetchMessagesResponse,
  fetchMessagesError,
  addMessage,
  addMessageResponse,
  addMessageError,
  updateMessage,
  updateMessageResponse,
  updateMessageError,
  deleteMessage,
  deleteMessageResponse,
  deleteMessageError
} from "store/modules/messages/actions";

import { getToken } from "store/modules/auth/selectors";

import { fetchRequest } from "sagas/api";

interface PayloadProps {
  payload?: any
  messageId?: string
  userId?: string
  conversationId?: string
  text?: string
}

export function* fetchMessagesWorker({ payload }: PayloadProps) {
  try {
    yield put(setLoading(true));

    const token = yield select(getToken);

    const response = yield call(fetchRequest, { 
      url: `/messages/list/${payload}`,
      headers: { authorization: `Bearer ${token}` }
    });
    
    if (response.status === 200) {
      yield put(fetchMessagesResponse(response.data.messages));
    }

  } catch (error) {

    yield put(fetchMessagesError(error.response.data));

  } finally {

    yield put(setLoading(false));

  }
}

export function* addMessageWorker({
  payload: { userId = '3', conversationId, text }
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const token = yield select(getToken);

    const response = yield call(fetchRequest, { 
      url: '/messages/create/',
      method: 'POST',
      headers: { authorization: `Bearer ${token}` },
      data: {
        userId,
        conversationId,
        text
      },
    });

    if (response.status === 201) {

      yield put(addMessageResponse(response.data));

    }
  } catch (error) {

    yield put(addMessageError(error.response.data));

  } finally {

    yield put(setLoading(false));

  }
}

export function* updateMessageWorker({
  payload: { messageId, text }
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const token = yield select(getToken);
    
    const response = yield call(fetchRequest, { 
      url: '/messages/update/',
      method: 'PUT',
      headers: { authorization: `Bearer ${token}` },
      data: {
        messageId,
        text
      },
    });

    if (response.status === 201) {

      yield put(updateMessageResponse(response.data));

    }
  } catch (error) {

    yield put(updateMessageError(error.response));

  } finally {

    yield put(setLoading(false));

  }
}

export function* deleteMessageWorker({
  payload: { messageId }
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const token = yield select(getToken);

    const response = yield call(fetchRequest, { 
      url: '/messages/delete/',
      method: 'DELETE',
      headers: { authorization: `Bearer ${token}` },
      data: {
        messageId
      },
    });

    if (response.status === 200) {

      yield put(deleteMessageResponse(response.data));

    }
  } catch (error) {

    yield put(deleteMessageError(error.response.data));

  } finally {

    yield put(setLoading(false));

  }
}

export function* messagesWatcher() {
  yield takeEvery(fetchMessages, fetchMessagesWorker);
  yield takeEvery(addMessage, addMessageWorker);
  yield takeEvery(updateMessage, updateMessageWorker);
  yield takeEvery(deleteMessage, deleteMessageWorker);
}

export default messagesWatcher;
