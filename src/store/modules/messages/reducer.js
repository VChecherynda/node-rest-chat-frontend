import { handleActions } from "redux-actions";

import {
  editMessage,
  fetchMessagesResponse,
  fetchMessagesError,
  addMessageResponse,
  addMessageError,
  updateMessageResponse,
  updateMessageError,
  deleteMessageResponse,
  deleteMessageError
} from "./actions";

const defaultState = {
  entities: {},
  list: [],
  error: ""
};

export default handleActions(
  {
    [editMessage]: (state, { payload }) => ({
      ...state,
      entities: payload
    }),
    [fetchMessagesResponse]: (state, { payload }) => ({
      ...state,
      list: [...payload]
    }),
    [fetchMessagesError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [addMessageResponse]: (state, { payload }) => {
      console.log([...state.list, payload]);

      return {
        ...state,
        entities: {},
        list: [...state.list, payload]
      };
    },
    [addMessageError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [updateMessageResponse]: (state, { payload }) => {
      const shalowCopy = [...state.list];
      const findIndex = state.list.findIndex(item => item.id === payload.id);
      shalowCopy[findIndex] = payload;

      return {
        ...state,
        entities: {},
        list: shalowCopy
      };
    },
    [updateMessageError]: (state, { payload }) => ({
      ...state,
      error: payload
    }),
    [deleteMessageResponse]: (state, { payload }) => ({
      ...state,
      list: state.list.filter(item => item.id !== payload.messageId)
    }),
    [deleteMessageError]: (state, { payload }) => ({
      ...state,
      error: payload
    })
  },
  defaultState
);
