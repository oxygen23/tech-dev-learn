import { LessonCard } from './LessonCard';

export interface Lesson {
  completed_percent: number;
  description: string;
  id: number;
  lesson_cards: LessonCard[];
  lesson_description: string;
  lesson_dislike: number;
  lesson_likes: number;
  lesson_time: number;
  title: string;
}
