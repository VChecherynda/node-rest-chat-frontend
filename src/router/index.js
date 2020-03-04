import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Main from "views/main";
import Modals from "views/modals";
import SignIn from "views/signin";
import SignUp from "views/signup";

import useHooks from "./hooks";

export default () => {
  const { isAuthorized } = useHooks();

  let router = (
    <Switch>
      <Route path="/sign-in">
        <SignIn />
      </Route>

      <Route path="/sign-up">
        <SignUp />
      </Route>

      <Redirect to="/sign-in" />
    </Switch>
  );

  if (isAuthorized) {
    router = (
      <>
        <Switch>
          <Route path="/chat">
            <Main />
          </Route>

          <Redirect to="/chat" />
        </Switch>
        <Modals />
      </>
    );
  }

  return <Router>{router}</Router>;
};
