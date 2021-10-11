import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputApp from "./InputApp";
import ListCourseComponent from "./component/ListCourseComponent";
import CourseComponent from "./component/CourseComponent";

const App = () => {
  return (
    <Router>
      <>
        <h1>Instructor Application</h1>
        <Switch>
          <Route path="/input" exact component={InputApp} />

          <Route path="/" exact component={ListCourseComponent} />
          <Route path="/courses" exact component={ListCourseComponent} />
          <Route path="/courses/:id" component={CourseComponent} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
