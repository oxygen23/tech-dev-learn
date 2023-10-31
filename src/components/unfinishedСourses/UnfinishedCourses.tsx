import { Course } from '@/types/Course';
import { FC } from 'react';

import PreviewCourse from '../previewCourse/PreviewCourse';

interface IUnfinishedCourses {
  courses?: Course[];
  unfinishedCourses?: number[];
}

const UnfinishedCourses: FC<IUnfinishedCourses> = ({
  courses,
  unfinishedCourses,
}) => {
  const findCoursesStarted = courses
    ?.filter((course) => unfinishedCourses?.includes(course.id))
    .map((course) => course);

  return (
    <div className="wrapper unfinished">
      {findCoursesStarted
        ?.slice(0, 2)
        ?.map((item: Course) => <PreviewCourse item={item} key={item.id} />)}
    </div>
  );
};

export default UnfinishedCourses;
