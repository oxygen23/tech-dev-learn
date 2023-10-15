import { Lesson } from '@/types/Lesson';
import { FC } from 'react';
import styles from './SubLesson.module.sass';

interface SublessonsComp {
  sublesson: Lesson;
  id: number;
}

const SubLessons: FC<SublessonsComp> = ({ sublesson, id }) => {
  console.log(sublesson);
  return (
    <div className={styles.wrapper}>
      Урок {id}.{sublesson.id}
    </div>
  );
};

export default SubLessons;
