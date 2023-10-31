import { CourseContext } from '@/pages/course/CourseContext';
import { Course } from '@/types/Course';
import Image from 'next/image';
import {
  FC, useContext, useEffect, useState,
} from 'react';
import { AiOutlineHeart, AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';

import Title from '../title/Title';
import styles from './CourseInfoBlock.module.sass';

interface CoursePageProps {
  course: Course;
}
const CourseInfoBlock: FC<CoursePageProps> = ({ course }) => {
  const [currentDescription, setCurrentDescription] = useState<null | string>(
    null,
  );

  const contextValues = useContext(CourseContext);
  useEffect(() => {
    course.lessons_wrapper.forEach((lessonWrapper) => {
      lessonWrapper.lessons.forEach((lesson) => {
        if (
          lessonWrapper.id === contextValues.currentLesson
          && lesson.id === contextValues.currentSubLesson
        ) {
          setCurrentDescription(lesson.lesson_description);
        }
      });
    });
  }, [course, contextValues.currentLesson, contextValues.currentSubLesson]);

  return (
    <>
      <div className={styles.author__block}>
        <div className={styles.author__block_left}>
          <Image
            alt="Фото автора"
            className={styles.author__block_image}
            height={80}
            src={course.author_image}
            width={80}
          />
          <div className={styles.author__block_subtitle_block}>
            <Title title={course.title} titleLayer={2} />
            <div className={styles.author__block_subtitle_block_link}>
              {course.author_link}
            </div>
          </div>
        </div>
        <div className={styles.author__block_right}>
          <button className={styles.author__block_right_button} type="button">
            <AiOutlineLike />
            {' '}
            {course.course_likes}
          </button>
          <button className={styles.author__block_right_button} type="button">
            <BiDislike />
            {' '}
            {course.course_dislikes}
          </button>
          <button className={styles.author__block_right_button} type="button">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
      <div className={styles.description}>
        {contextValues.currentSubLesson === 0
          ? course.description
          : currentDescription}
      </div>
    </>
  );
};

export default CourseInfoBlock;
