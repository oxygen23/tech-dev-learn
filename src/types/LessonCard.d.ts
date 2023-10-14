import { AnswerOption } from "./AnswerOption";

export interface LessonCard {
	id: number;
	question: string;
	answer: number;
	completed: boolean;
	answer_options: AnswerOption[];
	answer_description: string;
}
