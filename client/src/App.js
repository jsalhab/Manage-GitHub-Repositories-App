import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import SearchPage from "./components/SearchPage/SearchPage";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "./components/Auth/Auth";
import { setToken, removeToken } from "./store/actions";
import history from "./history";

import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.setToken();
  }, []);

  const logout = () => {
    props.removeToken();
  };

  return (
    <div className="App">
      <Router history={history}>
        <Header logout={logout} />
        <Switch>
          {!props.auth.token && (
            <React.Fragment>
              <Route path="/" exact component={Auth} />
              <Redirect to="/" />
            </React.Fragment>
          )}

          {props.auth.token && (
            <React.Fragment>
              <Route path="/search" exact component={SearchPage} />
              <Route path="/bookmarks" exact component={Bookmarks} />
              <Redirect to="/search" />
            </React.Fragment>
          )}
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { setToken, removeToken })(App);
