import axios from '@/axios.js';
import AllCourses from '@/components/allCourses/AllCourses';
import { wrapper } from '@/redux/store';
import { Course } from '@/types/Course';
import { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

interface AllCoursesProps {
  allCourses: Course[];
}

const AllCoursesPage: NextPage<AllCoursesProps> = ({ allCourses }) => (
  <>
    <NextSeo title="Все курсы" />
    <AllCourses allCourses={allCourses} />
  </>
);

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
