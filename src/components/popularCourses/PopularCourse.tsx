import { Course } from '@/types/Course';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './PopularCourse.module.sass';

const PopularCourse: FC<Course> = ({ author_image, course_image, id }) => {
  return (
    <Link
      href={`/course/${id}`}
      className={styles.popular}
      style={{ backgroundImage: `url(${course_image})` }}
    >
      <Image
        src={course_image}
        fill
        alt="Фоновое изображение"
        className={styles.popular__background}
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
          width={60}
          height={60}
          alt="Фото автора"
          src={author_image}
          className={styles.popular__author}
        />
      </div>
    </Link>
  );
};

export default PopularCourse;
