import { Lesson } from './Lesson';

export interface LessonsWrapper {
  description: string;
  id: number;
  lesson_description: string;
  lesson_time?: number;
  lessons: Lesson[];
  title: string;
}
