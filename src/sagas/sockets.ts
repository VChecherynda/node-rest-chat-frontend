import { eventChannel } from "redux-saga";
import {  takeEvery, select, take, call, put } from "redux-saga/effects";
import io from 'socket.io-client';

import {
  setLoading,
  addMessage,
  addMessageResponse,
  addMessageError
} from "store/modules/messages/actions";

import { getToken } from "store/modules/auth/selectors";

import { fetchRequest } from "sagas/api";

interface SocketConncection {
  url: string
  namespace: string
}

const createSocketConnection = ({ url, namespace }: SocketConncection) => {
  return io(url + '/' + namespace);
}

interface PayloadProps {
  id: string
}

interface ActionProps {
  payload: PayloadProps
}

const createSocketChannel = (socket: any) => {
  return eventChannel(emit => {

    const messageHandler = (event: any) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      return emit(event.payload)
    }

    const messageErrorHandler = (errorEvent: any) => {
      // create an Error object and put it into the channel
      return emit(new Error(errorEvent.reason))
    }

    // setup the subscription
    socket.on('messages', messageHandler)
    socket.on('error', messageErrorHandler)

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.off('ping', messageHandler)
    }

    return unsubscribe
  })
}

function* watchOnMessagesWatcher({ payload: { id }}: ActionProps) {
  const socket = yield call(createSocketConnection, {
    url: 'http://localhost:3000',
    namespace: '/messages'
  });

  const socketChannel = yield call(createSocketChannel, socket);

  try {
    const payload = yield take(socketChannel);

    console.log('[socketChannel]', payload);

    yield put(setLoading(true));

    // yield put (addMessageResponse(payload));

  } catch (error) {
    socketChannel.close()
  }
  
}

export function* socketsWatcher() {
  yield takeEvery(addMessage, watchOnMessagesWatcher);

}

export default socketsWatcher;

// export function* watchOnMessages() {
  // const socket = yield call(createWebSocketConnection, 'http://localhost:3000', '/messages/list', id)
  // const socketChannel = yield call(createSocketChannel, socket)

//   while (true) {
//     try {
//       // An error from socketChannel will cause the saga jump to the catch block
//       const payload = yield take(socketChannel)
//       yield put({ type: INCOMING_PONG_PAYLOAD, payload })
//       yield fork(pong, socket)
//     } catch(err) {
//       console.error('socket error:', err)
//       // socketChannel is still open in catch block
//       // if we want end the socketChannel, we need close it explicitly
//       // socketChannel.close()
//     }
//   }
// }