import { Lesson } from "./Lesson";

export interface LessonsWrapper {
	id: number;
	title: string;
	description: string;
	lesson_time?: number;
	lesson_description: string;
	lessons: Lesson[];
}
