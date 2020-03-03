import { handleActions } from "redux-actions";

import {
  setLoading,
  updateConversation,
  createConversationResponse,
  createConversationError,
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
    [createConversationResponse]: (state, { payload }) => {
      console.log("[createConversationResponse]", payload);

      return {
        ...state,
        list: [...state.list, payload]
      };
    },
    [createConversationError]: (state, { payload }) => ({
      ...state,
      error: payload
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
