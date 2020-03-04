import { handleActions } from "redux-actions";

import {
  setLoading,
  signInResponse,
  signInError,
  signUpResponse,
  signUpError,
  logOut
} from "./actions";

const defaultState = {
  token: "",
  loading: false,
  error: ""
};

export default handleActions(
  {
    [setLoading]: (state, { payload }) => ({
      ...state,
      loading: payload
    }),
    [signInResponse]: (state, { payload }) => ({
      ...state,
      token: payload,
      error: ""
    }),
    [signInError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [signUpResponse]: (state, { payload }) => ({
      ...state,
      token: payload,
      error: ""
    }),
    [signUpError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [logOut]: () => ({
      defaultState
    })
  },
  defaultState
);
