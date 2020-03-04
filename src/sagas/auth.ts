import { takeEvery, select, call, put } from "redux-saga/effects";
import { store } from "store";

import { 
  setLoading,
  signIn,
  signInResponse,
  signInError,
  signUp,
  signUpResponse,
  signUpError,
} from "store/modules/auth/actions";

import { fetchRequest } from "sagas/api";

interface UsersProps {
  email: string
  password: string
}

interface PayloadProps {
  payload: UsersProps
}

export function* signInWorker({ 
  payload: { email, password } 
}: PayloadProps) {
  try {
    yield put(setLoading(true));

    const response = yield call(fetchRequest, { 
      url: "/auth/sign-in",
      data: {
        email,
        password
      },
      method: 'POST' 
    });

    if (response.status === 201) {
      yield put(signInResponse(response.data));
    }

  } catch (error) {

    yield put(signInError(error.response.data));

  } finally {
    yield put(setLoading(false));
  }
}

export function* authWatcher() {
  yield takeEvery(signIn, signInWorker);
  // yield takeEvery(signUp, signUpWorker);
}

export default authWatcher;
