import { handleActions } from "redux-actions";

import {
  setLoading,
  updateConversation,
  fetchConversationsResponse,
  fetchConversationsError,
  clearUsers
} from "./actions";

const defaultState = {
  entities: {},
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
    [updateConversation]: (state, { payload }) => ({
      ...state,
      entities: payload
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
