import { Course } from './Course';

export interface Author {
  id: number;
  author_id: number;
  count_courses: number;
  likes: number;
  dislikes: number;
  author_image: string;
  author_courses: Course[];
}
