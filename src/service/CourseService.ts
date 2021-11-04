import axios from "axios";

const INSTRUCTOR = "in28minutes";
const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

export type Course = {
  id: string;
  username: string;
  description: string;
};

class CourseService {
  retrieveAllCourses() {
    return axios.get<Array<Course>>(`${INSTRUCTOR_API_URL}/courses`);
  }
  retrieveCourse(username: string, id: number) {
    return axios.get<Course>(`${INSTRUCTOR_API_URL}/courses/${id}`);
  }
  deleteCourse(id: number) {
    // TODO: 리턴 값 없는 Type
    return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
  }
}

export default new CourseService();
