import { LessonsWrapper } from './LessonsWrapper';

export interface CoursesStarted {
  author: string;
  author_id: number;
  author_image: string;
  author_link: string;
  course_dislikes: number;
  course_image: string;
  course_likes: number;
  course_time: number;
  description: string;
  favorite_count_courses: number;
  id: number;
  lessons_wrapper: LessonsWrapper[];
  title: string;
}
