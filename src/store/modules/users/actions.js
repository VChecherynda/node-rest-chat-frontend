import { createAction } from "redux-actions";

export const setLoading = createAction("SET_LOADING");

export const fetchUsers = createAction("FETCH_USERS");
export const fetchUsersResponse = createAction("FETCH_USERS_RESPONSE");
export const fetchUsersError = createAction("FETCH_USERS_ERROR");

export const clearUsers = createAction("CLEAR_USERS");
