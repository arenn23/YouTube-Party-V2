import React, { Component } from "react";
import HomePage from "./HomePage";
import CreateRoom from "./CreateRoom";
import { Switch, Route } from "react-router-dom";
import Room from "./Room";
import CreateAccount from "./CreateAccount";
import Login from "./Login";

class Routing extends Component {
  render() {
    return (
      <>
        <Switch className="body">
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/createroom" render={(props) => <CreateRoom />} />
          <Route exact path="/room" render={(props) => <Room />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/createaccount" render={() => <CreateAccount />} />
        </Switch>
      </>
    );
  }
}

export default Routing;
