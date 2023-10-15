import { LessonsWrapper } from './LessonWrapper';

export interface Course {
  id: number;
  author: string;
  author_id: number;
  author_link: string;
  author_image: string;
  course_image: string;
  title: string;
  description: string;
  course_likes: number;
  course_dislikes: number;
  favorite_count_courses: number;
  lessons_wrapper: LessonsWrapper[];
}
