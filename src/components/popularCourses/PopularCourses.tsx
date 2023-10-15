import { Author } from '@/types/Author';
import { Course } from '@/types/Course';
import { FC } from 'react';
import PopularCourse from './PopularCourse';

interface PopularCoursesProps {
  popularCourses: Course[];
}

const PopularCourses: FC<PopularCoursesProps> = ({ popularCourses }) => {
  const newCourses: Course[] = [];
  popularCourses.forEach((author: Author) => {
    author.author_courses.forEach((course: Course) => {
      if (!newCourses.some((prevCourse) => prevCourse.id === course.id)) {
        newCourses.push(course);
      }
    });
  });
  newCourses.sort((a, b) => b.course_likes - a.course_likes);

  return (
    <>
      {newCourses.map((item: Course, index: number) => {
        const author: Author | undefined = popularCourses.find(
          (authorCourse: Author) => authorCourse.author_id === item.author_id,
        );
        return author ? <PopularCourse key={index} {...item} /> : null;
      })}
    </>
  );
};

export default PopularCourses;
