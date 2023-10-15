import AllCourses from '@/components/allCourses/AllCourses';
import { wrapper } from '@/redux/store';
import { Course } from '@/types/Course';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import axios from '@/axios.js';
import { AxiosResponse } from 'axios';

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
  const response: AxiosResponse<Course[]> = await axios.get('/courses');
  const { data }: { data?: Course[] } = response;
  return {
    props: {
      allCourses: data || [],
    },
  };
});

export default AllCoursesPage;
