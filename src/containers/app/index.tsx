import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "../../routes/private-route";

import Login from "../auth/login";
import Gallery from "../gallery";
import { AuthContext } from "context/auth";

const App = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const setAuthToken = (token: string) => {
    window.localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      <Router>
        <PrivateRoute path="/" exact component={Gallery} />
        <Route path="/login" component={Login} />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
