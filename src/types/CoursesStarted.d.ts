import { LessonsWrapper } from './LessonWrapper';

export interface CoursesStarted {
  id: number;
  author: string;
  author_id: number;
  author_link: string;
  author_image: string;
  course_image: string;
  title: string;
  description: string;
  course_time: number;
  course_likes: number;
  course_dislikes: number;
  favorite_count_courses: number;
  lessons_wrapper: LessonsWrapper[];
}
