import { Course } from '@/types/Course';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import ButtonFavorites from '../buttons/ButtonFavorite';
import styles from './PrevewCourse.module.sass';

interface PreviewCourseProps {
  item: Course;
}
const PreviewCourse: FC<PreviewCourseProps> = ({ item }) => (
  <Link className={styles.preview} href={`/course/${item.id}`}>
    <Image
      alt="Фоновое изображение"
      className={styles.preview__background}
      fill
      src={item.course_image}
    />
    <div
      className={styles.preview__mask}
      style={{
        background:
          'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.50) 51.04%, #000 100%)',
      }}
    />

    <div className={styles.preview__content}>
      <div className={styles.preview__content_header}>
        <div className={styles.preview__content_header_left}>
          <Image
            alt="Фото автора"
            className={styles.preview__content_header_image}
            height={50}
            src={item.author_image}
            width={50}
          />
          <div className={styles.preview__content_header_author_block}>
            <div className={styles.preview__content_header_author_block_name}>
              {item.author}
            </div>
            <div className={styles.preview__content_header_author_block_link}>
              {item.author_link}
            </div>
          </div>
        </div>
        <div className={styles.preview__content_header_block}>
          <ButtonFavorites item={item} />
          <div className={styles.preview__content_header_block_time} />
        </div>
      </div>
      <p className={styles.preview__content_title}>{item.title}</p>
      <div className={styles.preview__content_bottom}>{item.description}</div>
    </div>
  </Link>
);

export default PreviewCourse;
