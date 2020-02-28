import { createAction } from "redux-actions";

export const addMessage = createAction("ADD_MESSAGE");
export const addMessageResponse = createAction("ADD_MESSAGE_RESPONSE");
export const addMessageError = createAction("ADD_MESSAGE_ERROR");
