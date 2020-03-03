import { createAction } from "redux-actions";

export const setLoading = createAction("SET_LOADING");

export const editMessage = createAction("SET_LOADING");

export const fetchMessages = createAction("FETCH_MESSAGE");
export const fetchMessagesResponse = createAction("FETCH_MESSAGE_RESPONSE");
export const fetchMessagesError = createAction("FETCH_MESSAGE_ERROR");

export const addMessage = createAction("ADD_MESSAGE");
export const addMessageResponse = createAction("ADD_MESSAGE_RESPONSE");
export const addMessageError = createAction("ADD_MESSAGE_ERROR");

export const updateMessage = createAction("UPDATE_MESSAGE");
export const updateMessageResponse = createAction("UPDATE_MESSAGE_RESPONSE");
export const updateMessageError = createAction("UPDATE_MESSAGE_ERROR");

export const deleteMessage = createAction("DELETE_MESSAGE");
export const deleteMessageResponse = createAction("DELETE_MESSAGE_RESPONSE");
export const deleteMessageError = createAction("DELETE_MESSAGE_ERROR");

export const clearMessages = createAction("CLEAR_MESSAGES");
