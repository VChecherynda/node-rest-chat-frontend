import { all } from "redux-saga/effects";

import messageSaga from "./message";

const rootSaga = function* root() {
  yield all([messageSaga()]);
};

export default rootSaga;
