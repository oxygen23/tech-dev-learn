// import useWindowWidth from "@/hooks/useWindowWidth";
import { CoursesStarted } from '@/types/CoursesStarted';
import { User } from '@/types/User';
import { FC } from 'react';
import PreviewCourse from '../previewCourse/PreviewCourse';

interface IUnfinishedCourses {
  unfinishedCourses: User;
}

const UnfinishedCourses: FC<IUnfinishedCourses> = ({ unfinishedCourses }) => {
  // const windowWidth = useWindowWidth();

  // const slicesCourses: CoursesStarted[] = Array.isArray(courses_started)
  // 	? windowWidth !== null && windowWidth < 1440 && courses_started.length > 2
  // 		? courses_started.slice(0, 1)
  // 		: windowWidth !== null && windowWidth < 1920 && courses_started.length > 2
  // 		? courses_started.slice(0, 2)
  // 		: courses_started
  // 	: [];
  return (
    <div className="wrapper unfinished">
      {unfinishedCourses.courses_started
        .slice(0, 2)
        .map((item: CoursesStarted, index: number) => (
          <PreviewCourse
            key={index}
            item={item}
            // fnFavorite={handleChangeFavorite}
          />
        ))}
    </div>
  );
};

export default UnfinishedCourses;
