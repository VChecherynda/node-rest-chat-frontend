import { handleActions } from "redux-actions";

import { addMessageResponse, addMessageError } from "./actions";

const defaultState = {
  list: [],
  error: ""
};

export default handleActions(
  {
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
