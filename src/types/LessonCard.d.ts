import { AnswerOption } from './AnswerOption';

export interface LessonCard {
  answer: number;
  answer_description: string;
  answer_options: AnswerOption[];
  completed: boolean;
  id: number;
  question: string;
}
