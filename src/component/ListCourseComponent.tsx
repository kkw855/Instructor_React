import React, { useEffect, useState } from "react";
import CourseService from "../service/CourseService";
import { RouteComponentProps } from "react-router-dom";

type Course = {
  id: number;
  description: string;
};

const ListCourseComponent = ({ history }: RouteComponentProps) => {
  const [courses, setCourses] = useState<Array<Course>>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    refreshCourses();
  }, []);

  const refreshCourses = () =>
    CourseService.retrieveAllCourses().then((response) => {
      console.log(response);
      setCourses(response.data);
    });

  const deleteCourseClicked = async (id: number) => {
    try {
      const course = await CourseService.deleteCourse(id);
      setMessage(`Delete of course ${id} Successful`);
      await refreshCourses();
      console.log(course);
    } catch (e) {
      console.error(e);
    }
  };

  const updateCourseClicked = (id: number) => {
    console.log(`update: ${id}`);
    history.push(`/courses/${id}`);
  };

  const addCourseClicked = () => {
    history.push(`/courses/-1`);
  };

  return (
    <div className="container">
      <h3>All Courses</h3>
      {message && <div>{message}</div>}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.description}</td>
                <td>
                  <button onClick={() => deleteCourseClicked(course.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => updateCourseClicked(course.id)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => addCourseClicked()}>Add</button>
      </div>
    </div>
  );
};

export default ListCourseComponent;
