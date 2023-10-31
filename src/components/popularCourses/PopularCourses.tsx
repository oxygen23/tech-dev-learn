import { Course } from '@/types/Course';
import { FC } from 'react';

import PopularCourse from './PopularCourse';

interface PopularCoursesProps {
  courses: Course[];
}

const PopularCourses: FC<PopularCoursesProps> = ({ courses }) => (
  <>
    {courses.slice(0, 10).map((item: Course, index: number) => (
      <PopularCourse {...item} key={index} />
    ))}
  </>
);

export default PopularCourses;
