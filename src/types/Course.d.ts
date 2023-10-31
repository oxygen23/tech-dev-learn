import { LessonsWrapper } from './LessonWrapper';

export interface Course {
  author: string;
  author_id: number;
  author_image: string;
  author_link: string;
  course_dislikes: number;
  course_image: string;
  course_likes: number;
  description: string;
  id: number;
  lessons_wrapper: LessonsWrapper[];
  title: string;
}
