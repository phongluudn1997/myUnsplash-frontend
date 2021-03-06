import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from "../../routes/private-route";
import PrivateComponent from "components/private-component";

import Login from "../auth/login";
import Gallery from "../gallery";
import { AuthContext } from "context/auth";
import NavBar from "containers/nav";
import NotFoundPage from "components/404";
import Register from "containers/auth/register";
import ErrorBoundary from "containers/error-boundaries";
import style from "./styles.module.scss";

const App = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [reFetchPage, setRefetchPage] = useState(1);

  const setAuthToken = (token: string) => {
    if (!token) {
      window.localStorage.removeItem("token");
    }
    window.localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <ErrorBoundary>
      <AuthContext.Provider value={{ token, setAuthToken }}>
        <Router>
          <NavBar setRefetchPage={setRefetchPage} />
          <div className={style["app"]}>
            <Switch>
              <PrivateRoute
                reFetchPage={reFetchPage}
                path="/"
                exact
                component={Gallery}
              />
              <PrivateRoute path="/private" component={PrivateComponent} />
              <Route
                path="/login"
                render={(props) => {
                  return <Login {...props} />;
                }}
              />
              <Route path="/register" component={Register} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
