import { LessonCard } from "./LessonCard";

export interface Lesson {
	id: number;
	title: string;
	description: string;
	lesson_time: number;
	lesson_description: string;
	lesson_likes: number;
	lesson_dislike: number;
	completed_percent: number;
	lesson_cards: LessonCard[];
}
