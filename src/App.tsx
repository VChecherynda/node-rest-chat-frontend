import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import { ModalProvider } from "components/modal";
import Router from 'router';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
