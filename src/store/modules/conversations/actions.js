import { createAction } from "redux-actions";

export const setLoading = createAction("SET_LOADING");

export const fetchConversations = createAction("FETCH_CONVERSATIONS");
export const fetchConversationsResponse = createAction(
  "FETCH_CONVERSATIONS_RESPONSE"
);
export const fetchConversationsError = createAction(
  "FETCH_CONVERSATIONS_ERROR"
);

export const clearUsers = createAction("CLEAR_USERS");
