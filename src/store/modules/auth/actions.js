import { createAction } from "redux-actions";

export const setLoading = createAction("SET_CONVERSATINS_LOADING");

export const signIn = createAction("SIGN_IN");
export const signInResponse = createAction("SIGN_IN_RESPONSE");
export const signInError = createAction("SIGN_IN_ERROR");

export const signUp = createAction("SIGN_UP");
export const signUpResponse = createAction("SIGN_UP_RESPONSE");
export const signUpError = createAction("SIGN_UP_ERROR");

export const clearErrors = createAction("CLEAR_ERROR");

export const logOut = createAction("LOG_OUT");
