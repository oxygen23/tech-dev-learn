import { FC, useState, useEffect } from 'react';

import { Course } from '@/types/Course';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import styles from './CourseInfoBlock.module.sass';
import Title from '../title/Title';

interface CoursePageProps {
  course: Course;
  currentLesson: number;
  currentSubLesson: number;
}
const CourseInfoBlock: FC<CoursePageProps> = ({
  course,
  currentLesson,
  currentSubLesson,
}) => {
  const [currentDescription, setCurrentDescription] = useState<string | null>(
    null,
  );

  useEffect(() => {
    course.lessons_wrapper.forEach((lessonWrapper) => {
      lessonWrapper.lessons.forEach((lesson) => {
        if (
          lessonWrapper.id === currentLesson &&
          lesson.id === currentSubLesson
        ) {
          setCurrentDescription(lesson.lesson_description);
        }
      });
    });
  }, [course, currentLesson, currentSubLesson]);

  return (
    <>
      <div className={styles.author__block}>
        <div className={styles.author__block_left}>
          <Image
            src={course.author_image}
            className={styles.author__block_image}
            alt="Фото автора"
            width={80}
            height={80}
          />
          <div className={styles.author__block_subtitle_block}>
            <Title title={course.title} titleLayer={2} />
            <div className={styles.author__block_subtitle_block_link}>
              {course.author_link}
            </div>
          </div>
        </div>
        <div className={styles.author__block_right}>
          <button type="button" className={styles.author__block_right_button}>
            <AiOutlineLike /> {course.course_likes}
          </button>
          <button type="button" className={styles.author__block_right_button}>
            <BiDislike /> {course.course_dislikes}
          </button>
          <button type="button" className={styles.author__block_right_button}>
            <AiOutlineHeart /> {course.favorite_count_courses}
          </button>
        </div>
      </div>
      <div className={styles.description}>{currentDescription}</div>
    </>
  );
};

export default CourseInfoBlock;
