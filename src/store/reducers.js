import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import conversationsReducer from "store/modules/conversations/reducer";
import usersReducer from "store/modules/users/reducer";

export default history => {
  return combineReducers({
    usersReducer,
    conversationsReducer,
    router: connectRouter(history)
  });
};
