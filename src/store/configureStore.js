import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

export default (rootReducer, rootSaga, history) => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddlewareWithHistory = routerMiddleware(history);

  middleware.push(sagaMiddleware);
  middleware.push(routerMiddlewareWithHistory);

  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["conversations", "messages"]
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
