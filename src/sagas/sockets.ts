import { eventChannel } from "redux-saga";
import { select, fork, take, call, cancel, put } from "redux-saga/effects";
import io from 'socket.io-client';

import {
  setLoading,
  addMessage,
  addMessageResponse,
  addMessageError,
  updateMessageResponse,
  updateMessageError,
  deleteMessageResponse,
  deleteMessageError
} from "store/modules/messages/actions";

import {
  initSockets,
  logOut
} from "store/modules/auth/actions";

import {
  getConversationsEntities
} from "store/modules/conversations/selectors";

function connect() {
  return io(`${process.env.REACT_APP_BACKEND_URL}`);
}

function* createChannel(socket: any) {
  return eventChannel((emit: any) => {

    socket.on('messages', (action: any) => {
      emit(action);
    });

    return () => {
      console.log('unsubsribe');
      socket.close();
    };
  });
}

function* channel() {
  const socket = yield call(connect);
  const channel = yield call(createChannel, socket);

  try {
    while(true) {
      const { action, message } = yield take(channel);

      const selectedConversation = yield select(getConversationsEntities);
  
      const isCurrentConversation = selectedConversation.id === message.conversationId;
  
      if (action === 'create' && isCurrentConversation) {
        yield put(addMessageResponse(message));
      }
  
      if (action === 'update' && isCurrentConversation) {
        yield put(updateMessageResponse(message));
      }
  
      if (action === 'delete' && isCurrentConversation) {
        yield put(deleteMessageResponse(message));
      }
    }
  } catch(err) {
    console.log(err);
  } finally {
    channel.close();
  }
}

function* channelHandler() {
  while (yield take(initSockets)) {
    const task = yield fork(channel);
    yield take(logOut);
    yield cancel(task);
  }
}

export function* socketsWatcher() {
  yield fork(channelHandler);
}

export default socketsWatcher;