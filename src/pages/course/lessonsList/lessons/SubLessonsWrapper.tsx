import { LessonsWrapper } from "@/types/Course";
import { FC } from "react";
import SubLessons from "./SubLessons";

interface LessonComp {
	lesson: LessonsWrapper;
}

const SubLessonsWrapper: FC<LessonComp> = ({ lesson }) => {
	
	return (
		<div>
			{lesson.title}
			{lesson.lessons.map((item, index) => (
				<SubLessons sublesson={item} key={index}/>
			))}
		</div>
	);
};

export default SubLessonsWrapper;
