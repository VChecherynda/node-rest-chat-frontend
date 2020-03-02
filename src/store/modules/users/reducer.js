import { handleActions } from "redux-actions";

import {
  setLoading,
  fetchUsersResponse,
  fetchUsersError,
  clearUsers
} from "./actions";

const defaultState = {
  list: [],
  loading: false,
  error: ""
};

export default handleActions(
  {
    [setLoading]: (state, { payload }) => ({
      ...state,
      loading: payload
    }),
    [fetchUsersResponse]: (state, { payload }) => ({
      ...state,
      list: payload
    }),
    [fetchUsersError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [clearUsers]: (state, { payload }) => ({
      ...state,
      list: []
    })
  },
  defaultState
);
