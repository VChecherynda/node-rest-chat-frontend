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

import { getToken, getUserId } from "store/modules/auth/selectors";

import { fetchRequest } from "sagas/api";

interface UsersProps {
  userTwoId: string
}

interface PayloadProps {
  payload: UsersProps
}

export function* createConversationWorker({ 
  payload: { userTwoId } 
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const userOneId = yield select(getUserId);
    const token = yield select(getToken);

    const response = yield call(fetchRequest, { 
      url: "/conversations/create",
      method: 'POST',
      headers: { authorization: `Bearer ${token}` },
      data: {
        userOneId,
        userTwoId
      },
    });

    if (response.status === 201) {
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

    const token = yield select(getToken);

    const response = yield call(
      fetchRequest, { 
        url: "/conversations/list",
        headers: { authorization: `Bearer ${token}` },
      });

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
