import { handleActions } from "redux-actions";

import { fetchUsersResponse, fetchUsersError } from "./actions";

const defaultState = {
  list: [],
  error: ""
};

export default handleActions(
  {
    [fetchUsersResponse]: (state, { payload }) => ({
      ...state,
      list: [state.list, ...payload]
    }),
    [fetchUsersError]: (state, { payload }) => ({
      ...state,
      error: payload
    })
  },
  defaultState
);
