export interface RootUser {
	id: number;
	name: string;
	last_name: string;
	count_courses: number;
	likes: number;
	dislikes: number;
	courses_started: CoursesStarted[]
}

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
	finished: boolean;
	lessons_wrapper: LessonsWrapper[];
}

export interface LessonsWrapper {
	id: number;
	title: string;
	description: string;
	finished: boolean;
	lesson_time: number;
	lesson_description: string;
	lessons: Lesson[];
}

export interface Lesson {
	id: number;
	title: string;
	description: string;
	finished: boolean;
	lesson_time: number;
	lesson_description: string;
	lesson_likes: number;
	lesson_dislike: number;
	completed_percent: number;
	lesson_cards: LessonCard[];
}

export interface LessonCard {
	id: number;
	question: string;
	answer: number;
	completed: boolean;
	answer_options: AnswerOption[];
	answer_description: string;
}

export interface AnswerOption {
	id: number;
	value: number;
	label: string;
}
