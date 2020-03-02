import { createAction } from "redux-actions";

export const setLoading = createAction("SET_LOADING");

export const fetchMessages = createAction("FETCH_MESSAGE");
export const fetchMessagesResponse = createAction("FETCH_MESSAGE_RESPONSE");
export const fetchMessagesError = createAction("FETCH_MESSAGE_ERROR");

export const addMessage = createAction("ADD_MESSAGE");
export const addMessageResponse = createAction("ADD_MESSAGE_RESPONSE");
export const addMessageError = createAction("ADD_MESSAGE_ERROR");

export const clearMessages = createAction("CLEAR_MESSAGES");
