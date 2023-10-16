import axios from '@/axios.js';
import { wrapper } from '@/redux/store';
import { Course } from '@/types/Course';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Title from '@/components/title/Title';
import CourseInfoBlock from '@/components/courseInfoBlock/CourseInfoBlock';
import { AxiosResponse } from 'axios';
import styles from './Course.module.sass';
import LessonsList from './lessonsList/LessonsList';

interface CoursePageProps {
  course: Course;
}

const CoursePage: NextPage<CoursePageProps> = ({ course }) => {
  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const [currentSubLesson, setCurrentSubLesson] = useState<number>(0);

  // console.log(
  //   `CurrentLesson ${currentLesson}, CurrentSubLesson ${currentSubLesson}`,
  // );
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
          <div className={styles.empty__block} />
          <CourseInfoBlock
            course={course}
            currentLesson={currentLesson}
            currentSubLesson={currentSubLesson}
          />
          <div />
        </div>
        <div className={styles.wrapper_right}>
          <LessonsList
            lessonsList={course.lessons_wrapper}
            fnCurrentLesson={setCurrentLesson}
            fnCurrentSubLesson={setCurrentSubLesson}
          />
        </div>
      </div>
    </>
  );
};

export default CoursePage;

export const getServerSideProps = wrapper.getStaticProps(
  () => async (context) => {
    const { params } = context;
    let id;
    let data: Course | null = null;

    if (params && params.id) {
      id = params.id;
      const response: AxiosResponse<Course> = await axios.get(
        `/courses/${Number(id)}`,
      );
      data = response.data;
    }
    return {
      props: {
        course: data,
      },
    };
  },
);
