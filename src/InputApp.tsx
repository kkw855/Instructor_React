import React from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import SignupForm from "./component/SignupForm";

const InputApp = ({ match }: RouteComponentProps) => {
  console.log("InputApp(match): ", match);
  return (
    <Switch>
      <Route path={match.path} exact component={SignupForm} />
    </Switch>
  );
};

export default InputApp;
