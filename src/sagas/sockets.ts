import { eventChannel } from "redux-saga";
import {  takeEvery, apply, select, take, call, put } from "redux-saga/effects";
import io from 'socket.io-client';

import {
  setLoading,
  addMessage,
  addMessageResponse,
  addMessageError
} from "store/modules/messages/actions";

import {
  initSockets
} from "store/modules/auth/actions";

import { getToken } from "store/modules/auth/selectors";

import { fetchRequest } from "sagas/api";

function connect() {
  const socket = io('http://localhost:8080/');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
      console.log("Socket connected");
    });
  });
}

function* createChannel(socket: any) {
  return eventChannel((emit: any) => {

    socket.on('messages', (action: any) => {
      emit(action.message);
    });

    return () => {
      socket.close();
    };
  });
}

function* channel() {
  const socket = yield call(connect);
  const channel = yield call(createChannel, socket);

  while(true) {
    const message = yield take(channel);
    yield put(addMessageResponse(message));
  }
}

export function* socketsWatcher() {
  yield takeEvery(initSockets, channel);
}

export default socketsWatcher;