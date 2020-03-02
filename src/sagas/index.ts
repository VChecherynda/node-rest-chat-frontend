import { all } from "redux-saga/effects";

import usersSaga from "./users";
import conversationsSaga from "./conversations";
import messageSaga from "./message";

const rootSaga = function* root() {
  yield all([usersSaga()]);
  yield all([conversationsSaga()]);
  yield all([messageSaga()]);
};

export default rootSaga;
