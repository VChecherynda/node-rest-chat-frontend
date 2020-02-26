import { handleActions } from "redux-actions";

import { createMessage } from "./actions";

const defaultState = {
  messages: []
};

export default handleActions(
  {
    [createMessage]: (state, { payload }) => ({
      ...state,
      messages: payload
    })
  },
  defaultState
);
