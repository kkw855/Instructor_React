import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import ListCourseComponent from "./component/ListCourseComponent";
import CourseComponent from "./component/CourseComponent";

const InstructorApp = ({ match }: RouteComponentProps) => {
  console.log("InstructorApp(match): ", match.path);
  return (
    <>
      <h1>Instructor Application</h1>
      <Route path="/instructor" exact component={ListCourseComponent} />
      <Route path="/instructor/courses" exact component={ListCourseComponent} />
      <Route path={`${match.path}/courses/:id`} component={CourseComponent} />
    </>
  );
};

export default InstructorApp;
