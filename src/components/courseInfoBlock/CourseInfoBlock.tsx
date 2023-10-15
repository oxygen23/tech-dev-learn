import { FC } from 'react';

import { Course } from '@/types/Course';
import Image from 'next/image';
import { AiOutlineHeart, AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import styles from './CourseInfoBlock.module.sass';
import Title from '../title/Title';

interface CoursePageProps {
  course: Course;
}
const CourseInfoBlock: FC<CoursePageProps> = ({ course }) => {
  return (
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
        <div className={styles.author__block_right_button}>
          <AiOutlineLike /> {course.course_likes}
        </div>
        <div className={styles.author__block_right_button}>
          <BiDislike /> {course.course_dislikes}
        </div>
        <div className={styles.author__block_right_button}>
          <AiOutlineHeart /> {course.favorite_count_courses}
        </div>
      </div>
    </div>
  );
};

export default CourseInfoBlock;
