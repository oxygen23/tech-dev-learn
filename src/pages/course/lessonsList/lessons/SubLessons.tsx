import { Lesson } from '@/types/Lesson';
import { FC } from 'react';
import styles from './SubLesson.module.sass';

interface SublessonsComp {
  sublesson: Lesson;
  id: number;
  fnCurrentSubLesson: (id: number) => void;
  fnCurrentLesson: (id: number) => void;
}

const SubLessons: FC<SublessonsComp> = ({
  sublesson,
  id,
  fnCurrentSubLesson,
  fnCurrentLesson,
}) => {
  const fnCurrentDescription = (idArg: number, sublessonArg: Lesson) => {
    fnCurrentLesson(idArg);
    fnCurrentSubLesson(sublessonArg?.id);
  };

  return (
    <button
      type="button"
      className={styles.wrapper}
      onClick={() => fnCurrentDescription(id, sublesson)}
    >
      <span className={styles.title}>
        {id}.{sublesson?.id} {sublesson?.title}
      </span>
    </button>
  );
};

export default SubLessons;
