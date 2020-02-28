import { all } from "redux-saga/effects";

import conversationsSaga from "./conversations";
import messageSaga from "./message";

const rootSaga = function* root() {
  yield all([conversationsSaga()]);
  yield all([messageSaga()]);
};

export default rootSaga;
