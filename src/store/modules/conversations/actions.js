import { createAction } from "redux-actions";

export const setLoading = createAction("SET_LOADING");

export const fetchConversations = createAction("FETCH_CONVERSATION");
export const fetchConversationsResponse = createAction(
  "FETCH_CONVERSATION_RESPONSE"
);
export const fetchConversationsError = createAction("FETCH_CONVERSATION_ERROR");

export const clearUsers = createAction("CLEAR_USERS");
