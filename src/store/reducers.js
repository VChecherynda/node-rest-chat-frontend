import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "store/modules/auth/reducer";
import usersReducer from "store/modules/users/reducer";
import conversationsReducer from "store/modules/conversations/reducer";
import messagesReducer from "store/modules/messages/reducer";
import modalsReducer from "store/modules/modals/reducer";

export default history => (state, action) => {
  const newState = action.type === "LOG_OUT" ? undefined : state;

  return combineReducers({
    auth: authReducer,
    users: usersReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    modals: modalsReducer,
    router: connectRouter(history)
  })(newState, action);
};
