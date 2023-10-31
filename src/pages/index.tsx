import axios from '@/axios.js';
import PopularCourses from '@/components/popularCourses/PopularCourses';
import Title from '@/components/title/Title';
import UnfinishedCourses from '@/components/unfinishedСourses/UnfinishedCourses';
import { wrapper } from '@/redux/store';
import { Course } from '@/types/Course';
import { User } from '@/types/User';
import { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import styles from './Home.module.sass';

interface HomeProps {
  courses: Course[];
  unfinishedCourses: User;
}

const Home: NextPage<HomeProps> = ({ courses, unfinishedCourses }) => {
  const sortedCourses = courses.sort(
    (a, b) => b.course_likes / (b.course_likes + b.course_dislikes)
      - a.course_likes / (a.course_likes + a.course_dislikes),
  );
  return (
    <>
      <NextSeo title="TechDevLearn" />
      <div className={styles.home}>
        <div className={styles.home__unfinnished}>
          <Title title="Твои незаконченные курсы" titleLayer={1}>
            <button className={styles.home__title_button} type="button">
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
            </button>
          </Title>
          <div className={styles.home__unfinnished_block}>
            <UnfinishedCourses
              courses={courses}
              unfinishedCourses={unfinishedCourses.courses_started}
            />
          </div>
        </div>
        <div className={styles.home__popular}>
          <Title title="Популярные курсы" titleLayer={2}>
            <button className={styles.home__title_button} type="button">
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
            </button>
          </Title>
          <div className={styles.home__authors}>
            <PopularCourses courses={sortedCourses} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(() => async () => {
  const courses: AxiosResponse<Course[]> = await axios.get('/courses');
  const userCoursesUnfinished: AxiosResponse<User> = await axios.get('/user');

  return {
    props: {
      courses: courses.data,
      unfinishedCourses: userCoursesUnfinished.data,
    },
  };
});

export default Home;
