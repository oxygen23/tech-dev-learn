import { Course } from '@/types/Course';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './PrevewCourse.module.sass';
import ButtonFavorites from '../buttons/ButtonFavorite';

interface PreviewCourseProps {
  item: Course;
}

const PreviewCourse: FC<PreviewCourseProps> = ({ item }) => {
  return (
    <Link href={`/course/${item.id}`} className={styles.preview}>
      <Image
        src={item.course_image}
        fill
        alt="Фоновое изображение"
        className={styles.preview__background}
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
              className={styles.preview__content_header_image}
              alt="Фото автора"
              src={item.author_image}
              width={50}
              height={50}
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
};

export default PreviewCourse;
