import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InputApp from "./InputApp";
import InstructorApp from "./InstructorApp";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/input" component={InputApp} />
        <Route path="/instructor" component={InstructorApp} />
      </Switch>
    </Router>
  );
};

export default App;
