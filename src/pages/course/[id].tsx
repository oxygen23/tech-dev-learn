import axios from "@/axios";
import { CourseInfoBlock, Title } from "@/components";
import { wrapper } from "@/redux/store";
import { Course } from "@/types/Course";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";
import styles from "./Course.module.sass";
import LessonsList from "./lessonsList/LessonsList";
interface CoursePageProps {
  course: Course;
}

const CoursePage: NextPage<CoursePageProps> = ({ course }) => {
  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <>
      <NextSeo title={course.title} />
      <div className={styles.wrapper}>
        <div className={styles.wrapper_left}>
          <Title
            title={course.title}
            titleLayer={1}
            fontSize={40}
            marginBottom={28}
          />
          <div className={styles.empty__block}></div>
          <CourseInfoBlock course={course} />
        </div>
        <div className={styles.wrapper_right}>
          <LessonsList lessonsList={course.lessons_wrapper} />
        </div>
      </div>
    </>
  );
};

export default CoursePage;

export const getServerSideProps = wrapper.getServerSideProps(
  () => async (context) => {
    const { params } = context;
    let id;
    let data = null;

    if (params && params.id) {
      id = params.id;
      const response = await axios.get(`/courses/${id}`);
      data = response.data;
    }
    return {
      props: {
        course: data,
      },
    };
  }
);
