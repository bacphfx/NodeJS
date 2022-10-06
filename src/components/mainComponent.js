import React, { Component } from "react";
import Home from "./homeComponent";
import Users from "./usersListComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="/home">Enter User</a>
          <span> </span>
          <a href="/users">Users</a>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
