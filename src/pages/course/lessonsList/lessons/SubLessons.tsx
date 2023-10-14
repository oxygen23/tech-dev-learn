import { Lesson } from "@/types/Lesson";
import { NextPage } from "next";

interface SublessonsComp {
  sublesson: Lesson;
}

const SubLessons: NextPage<SublessonsComp> = ({ sublesson }) => {
  return <div>{sublesson.title}</div>;
};

export default SubLessons;
