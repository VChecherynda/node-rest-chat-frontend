import { takeEvery, select, call, put } from "redux-saga/effects";
import { store } from "store";

import { 
  setLoading,
  createConversation,
  createConversationResponse,
  createConversationError,
  fetchConversations,
  fetchConversationsResponse,
  fetchConversationsError
} from "store/modules/conversations/actions";

import { fetchRequest } from "sagas/api";

interface UsersProps {
  userOneId: string
  userTwoId: string
}

interface PayloadProps {
  payload: UsersProps
}

export function* createConversationWorker({ 
  payload: { userOneId = '3', userTwoId } 
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const response = yield call(fetchRequest, { 
      url: "/conversations/create",
      data: {
        userOneId,
        userTwoId
      },
      method: 'POST' 
    });

    if (response.status === 200) {
      yield put(createConversationResponse(response.data));
    }

  } catch (error) {

    yield put(createConversationError(error.response.data));

  } finally {
    yield put(setLoading(false));
  }
}

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
  yield takeEvery(createConversation, createConversationWorker);
  yield takeEvery(fetchConversations, fetchConversationsWorker);
}

export default conversationsWatcher;
