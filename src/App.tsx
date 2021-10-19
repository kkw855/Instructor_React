import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import InputApp from "./InputApp";
import InstructorApp from "./InstructorApp";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/input" component={InputApp} />
        <Route path="/instructor" component={InstructorApp} />
      </Switch>
    </Router>
  );
};

export default App;
