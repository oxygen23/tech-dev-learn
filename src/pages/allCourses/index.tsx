import axios from "@/axios";
import { AllCourses } from "@/components";
import { wrapper } from "@/redux/store";
import { Course } from "@/types/Course";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

interface AllCoursesProps {
  allCourses: Course[];
}

const AllCoursesPage: NextPage<AllCoursesProps> = ({ allCourses }) => {
  return (
    <>
      <NextSeo title="Все курсы" />
      <AllCourses allCourses={allCourses} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  const { data } = await axios.get("/courses");
  return {
    props: {
      allCourses: data,
    },
  };
});

export default AllCoursesPage;
