import React, { useEffect, useState } from "react";
import CourseService from "../service/CourseService";
import { RouteComponentProps } from "react-router-dom";
import { createCourseForm, FormObj } from "../utils/formConfig";

type MatchParams = {
  id: string;
};

const CourseComponent = ({ match }: RouteComponentProps<MatchParams>) => {
  const id = parseInt(match.params.id);

  const [form, setFrom] = useState<FormObj | null>(null);

  useEffect(() => {
    if (id >= 0) {
      // TODO: try-catch
      CourseService.retrieveCourse("in28minutes", id).then((response) => {
        const { id, description } = response.data;
        setFrom(createCourseForm(id, description));
      });
    }
  }, []);

  // const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const { name, value } = event.currentTarget;
  //   setCourse({
  //     ...course,
  //     [name]: value,
  //   });
  // };

  // const onSubmit = () => {
  //   console.log(course);
  // };

  return (
    <div>
      <h3>Course</h3>

      {/*<form>*/}
      {/*  <label htmlFor="id">Id</label>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    id="id"*/}
      {/*    value={course.id}*/}
      {/*    disabled*/}
      {/*    onChange={(e) => handleChange(e)}*/}
      {/*  />*/}
      {/*  <label htmlFor="description">Description</label>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    id="description"*/}
      {/*    value={course.description}*/}
      {/*    onChange={(e) => handleChange(e)}*/}
      {/*  />*/}
      {/*  <button onClick={() => onSubmit()}>Save</button>*/}
      {/*</form>*/}
    </div>
  );
};

export default CourseComponent;
