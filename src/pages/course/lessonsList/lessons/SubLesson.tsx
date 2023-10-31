import { Lesson } from '@/types/Lesson';
import { FC } from 'react';

import styles from './SubLesson.module.sass';

interface SublessonsComp {
  fnCurrentLesson: (id: number) => void;
  fnCurrentSubLesson: (id: number) => void;
  id: number;
  sublesson: Lesson;
}

const SubLesson: FC<SublessonsComp> = ({
  fnCurrentLesson,
  fnCurrentSubLesson,
  id,
  sublesson,
}) => {
  const fnCurrentDescription = (idArg: number, sublessonArg: Lesson) => {
    fnCurrentLesson(idArg);
    fnCurrentSubLesson(sublessonArg?.id);
  };

  return (
    <button
      className={styles.wrapper}
      onClick={() => fnCurrentDescription(id, sublesson)}
      type="button"
    >
      <span className={styles.title}>
        {id}
        .
        {sublesson?.id}
        {' '}
        {sublesson?.title}
      </span>
    </button>
  );
};

export default SubLesson;
