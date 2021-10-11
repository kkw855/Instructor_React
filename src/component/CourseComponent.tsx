import React, { useEffect, useState } from "react";
import CourseService, { Course } from "../service/CourseService";
import { RouteComponentProps } from "react-router-dom";

type MatchParams = {
  id: string;
};

const CourseComponent = ({ match }: RouteComponentProps<MatchParams>) => {
  const id = parseInt(match.params.id);

  const [course, setCourse] = useState<Course>({
    id: 0,
    username: "",
    description: "",
  });

  useEffect(() => {
    if (id >= 0) {
      // TODO: try-catch
      CourseService.retrieveCourse("in28minutes", id).then((response) => {
        setCourse(response.data);
      });
    }
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log(course);
  };

  return (
    <div>
      <h3>Course</h3>
      <form>
        <label htmlFor="id">Id</label>
        <input
          type="text"
          id="id"
          value={course.id}
          disabled
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={course.description}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => onSubmit()}>Save</button>
      </form>
    </div>
  );
};

export default CourseComponent;
