// import useWindowWidth from "@/hooks/useWindowWidth";
import { Course } from '@/types/Course';
import { CoursesStarted } from '@/types/CoursesStarted';
import { User } from '@/types/User';
import { FC } from 'react';
import PreviewCourse from '../previewCourse/PreviewCourse';

const UnfinishedCourses: FC<User> = ({ courses_started }) => {
  // const windowWidth = useWindowWidth();

  function handleChangeFavorite(course: Course) {
    console.log(123);
    // dispatch(changeFavorite(course));
  }

  // const slicesCourses: CoursesStarted[] = Array.isArray(courses_started)
  // 	? windowWidth !== null && windowWidth < 1440 && courses_started.length > 2
  // 		? courses_started.slice(0, 1)
  // 		: windowWidth !== null && windowWidth < 1920 && courses_started.length > 2
  // 		? courses_started.slice(0, 2)
  // 		: courses_started
  // 	: [];
  return (
    <div className="wrapper unfinished">
      {courses_started
        .slice(0, 2)
        .map((item: CoursesStarted, index: number) => (
          <PreviewCourse
            key={index}
            item={item}
            fnFavorite={handleChangeFavorite}
          />
        ))}
    </div>
  );
};

export default UnfinishedCourses;
