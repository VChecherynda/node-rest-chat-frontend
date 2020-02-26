import rootSaga from "../sagas";
import { createBrowserHistory } from "history";

import configureStore from "./configureStore";
import reducers from "./reducers";

const createStore = history => {
  const rootReducer = reducers(history);
  return configureStore(rootReducer, rootSaga, history);
};

const history = createBrowserHistory();

const { store, persistor } = createStore(history);

export { history, store, persistor };
