import axios from "axios";
import { store } from "store";

import { logOut } from "store/modules/auth/actions";

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // store.dispatch(logOut());
      console.log("Not autorazied");
    }

    return Promise.reject(error);
  }
);
