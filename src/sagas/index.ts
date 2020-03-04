import { all } from "redux-saga/effects";

import authSaga from "./auth";
import usersSaga from "./users";
import conversationsSaga from "./conversations";
import messageSaga from "./message";

const rootSaga = function* root() {
  yield all([
    authSaga(),
    usersSaga(),
    conversationsSaga(),
    messageSaga()
  ]);
};

export default rootSaga;
