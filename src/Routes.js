import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/statistics">
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
      </Route>
      <Route exact path="/customers">
        <h1>Customers Page</h1>
      </Route>
      <Route exact path="/diagrams">
        <h1>Diagrams Page</h1>
      </Route>
      <Route exact path="/settings">
        <h1>Settings Page</h1>
      </Route>
      <Route exact path="/logout">
        <h1>Log out Page</h1>
      </Route>
    </Switch>
  );
};

export default Routes;
