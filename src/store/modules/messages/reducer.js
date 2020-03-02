import { handleActions } from "redux-actions";

import {
  fetchMessagesResponse,
  fetchMessagesError,
  addMessageResponse,
  addMessageError
} from "./actions";

const defaultState = {
  list: [],
  error: ""
};

export default handleActions(
  {
    [fetchMessagesResponse]: (state, { payload }) => {
      return {
        ...state,
        list: [...payload]
      };
    },
    [fetchMessagesError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [addMessageResponse]: (state, { payload }) => ({
      ...state,
      list: [state.list, ...payload]
    }),
    [addMessageError]: (state, { payload }) => ({
      ...state,
      error: payload
    })
  },
  defaultState
);
