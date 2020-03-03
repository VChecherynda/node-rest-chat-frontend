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

export function* addMessageWorker({
  payload: { userId = '3', conversationId = '2', text }
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const response = yield call(fetchRequest, { 
      url: '/messages/create/', 
      data: {
        userId,
        conversationId,
        text
      },
      method: 'POST' 
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
    
    const response = yield call(fetchRequest, { 
      url: '/messages/update/', 
      data: {
        messageId,
        text
      },
      method: 'PUT' 
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

    const response = yield call(fetchRequest, { 
      url: '/messages/delete/', 
      data: {
        messageId
      },
      method: 'DELETE'
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
