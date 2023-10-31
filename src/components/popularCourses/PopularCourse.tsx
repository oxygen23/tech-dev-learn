import { Course } from '@/types/Course';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './PopularCourse.module.sass';

const PopularCourse: FC<Course> = ({ author_image, course_image, id }) => (
  <Link
    className={styles.popular}
    href={`/course/${id}`}
    style={{ backgroundImage: `url(${course_image})` }}
  >
    <Image
      alt="Фоновое изображение"
      className={styles.popular__background}
      fill
      src={course_image}
    />
    <div
      className={styles.popular__mask}
      style={{
        background:
          'linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgb(0, 0, 0) 100%)',
      }}
    />
    <div className={styles.popular__bottom}>
      <Image
        alt="Фото автора"
        className={styles.popular__author}
        height={60}
        src={author_image}
        width={60}
      />
    </div>
  </Link>
);

export default PopularCourse;
