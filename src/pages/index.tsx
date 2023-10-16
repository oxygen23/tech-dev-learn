import axios from '@/axios.js';
import PopularCourses from '@/components/popularCourses/PopularCourses';
import Title from '@/components/title/Title';
import UnfinishedCourses from '@/components/unfinishedСourses/UnfinishedCourses';
import { wrapper } from '@/redux/store';
import { Author } from '@/types/Author';
import { User } from '@/types/User';
import { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styles from './Home.module.sass';

interface HomeProps {
  unfinishedCourses: User;
  popularCourses: Author[];
  popularAuthors?: Author[];
}

const Home: NextPage<HomeProps> = ({ unfinishedCourses, popularCourses }) => {
  return (
    <>
      <NextSeo title="TechDevLearn" />
      <div className={styles.home}>
        <div className="styles.home__unfinnished">
          <Title title="Твои незаконченные курсы" titleLayer={1}>
            <button type="button" className={styles.home__title_button}>
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
            </button>
          </Title>
          <div className={styles.home__unfinnished_block}>
            <UnfinishedCourses unfinishedCourses={unfinishedCourses} />
          </div>
        </div>
        <div className={styles.home__popular}>
          <Title title="Популярные авторы и их лучшие курсы" titleLayer={2}>
            <button type="button" className={styles.home__title_button}>
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
              <span className={styles.home__title_button_item} />
            </button>
          </Title>
          <div className={styles.home__authors}>
            <PopularCourses popularCourses={popularCourses} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async () => {
    const userData: AxiosResponse<User> = await axios.get('/user');
    const popularCoursesData: AxiosResponse<User> = await axios.get('/authors');
    const popularsAuthors: AxiosResponse<User> = await axios.get(
      '/authors?_embed=author_courses&_sort=likes&_order=desc',
    );
    return {
      props: {
        unfinishedCourses: userData.data,
        popularCourses: popularCoursesData.data,
        popularAuthors: popularsAuthors.data,
      },
    };
  });

export default Home;
