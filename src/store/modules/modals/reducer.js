import { handleActions } from "redux-actions";

import { setModalStatus, closeModal } from "./actions";

const defaultState = {
  status: ""
};

export default handleActions(
  {
    [setModalStatus]: (state, { payload }) => ({
      ...state,
      status: payload
    }),
    [closeModal]: state => ({
      ...state,
      status: ""
    })
  },
  defaultState
);
