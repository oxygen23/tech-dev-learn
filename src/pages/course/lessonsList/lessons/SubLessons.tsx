import { Lesson } from "@/types/Course";
import { NextPage } from "next";

interface SublessonsComp {
	sublesson: Lesson;
}

const SubLessons: NextPage<SublessonsComp> = ({ sublesson }) => {
	return <div>{sublesson.title}</div>;
};

export default SubLessons;
