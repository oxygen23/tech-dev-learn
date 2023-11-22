import { Lesson } from './Lesson';

export interface LessonsWrapper {
  id: number;
  lesson_description: string;
  lesson_time?: number;
  lessons: Lesson[];
  title: string;
}
