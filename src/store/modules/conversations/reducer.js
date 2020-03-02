import { handleActions } from "redux-actions";

import {
  setLoading,
  fetchConversationsResponse,
  fetchConversationsError,
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
    [fetchConversationsResponse]: (state, { payload }) => ({
      ...state,
      list: payload
    }),
    [fetchConversationsError]: (state, { payload }) => ({
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
