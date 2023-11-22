import axios from '@/axios.js';
import Title from '@/components/title/Title';
import CourseInfoBlock from '@/pages/course/courseInfoBlock/CourseInfoBlock';
import { wrapper } from '@/redux/store';
import { Course } from '@/types/Course';
import { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from './Course.module.sass';
import CourseContextProvider from './CourseContext';
import LessonsList from './lessonsList/LessonsList';

interface CoursePageProps {
  course: Course;
}

const CoursePage: NextPage<CoursePageProps> = ({ course }) => (
  <CourseContextProvider>
    <NextSeo title={course.title} />
    <div className={styles.wrapper}>
      <div className={styles.wrapper_left}>
        <Title
          fontSize={40}
          marginBottom={28}
          title={course.title}
          titleLayer={1}
        />
        <div className={styles.empty__block} />
        <CourseInfoBlock course={course} />
        <div />
      </div>
      <div className={styles.wrapper_right}>
        <LessonsList lessonsList={course.lessons_wrapper} />
      </div>
    </div>
  </CourseContextProvider>
);

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
