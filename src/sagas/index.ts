import { all } from "redux-saga/effects";

import authSaga from "./auth";
import usersSaga from "./users";
import conversationsSaga from "./conversations";
import messageSaga from "./message";
import socketsSaga from "./sockets";

const rootSaga = function* root() {
  yield all([
    authSaga(),
    usersSaga(),
    conversationsSaga(),
    messageSaga(),
    // socketsSaga()
  ]);
};

export default rootSaga;
