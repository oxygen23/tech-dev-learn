import { FC } from "react";
import SubLessonsWrapper from "./lessons/SubLessonsWrapper";
import { LessonsWrapper } from "@/types/Course";
import Title from "@/components/title/Title";

interface LessonsComp {
	lessonsList: LessonsWrapper[];
}

const LessonsList: FC<LessonsComp> = ({ lessonsList }) => {
	return (
		<div>
			<Title title="Уроки" titleLayer={1} fontSize={40} marginBottom={28}/>
			{lessonsList?.map((item: LessonsWrapper, index) => (
				<SubLessonsWrapper lesson={item} key={index} />
			))}
		</div>
	);
};

export default LessonsList;
