import { CoursesStarted } from './CoursesStarted';

export interface User {
  id: number;
  name: string;
  last_name: string;
  count_courses: number;
  likes: number;
  dislikes: number;
  courses_started: CoursesStarted[];
}
