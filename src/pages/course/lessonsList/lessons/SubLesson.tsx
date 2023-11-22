import { Lesson } from '@/types/Lesson';
import { motion } from 'framer-motion';
import { FC } from 'react';

import styles from './SubLesson.module.sass';

interface SublessonsComp {
  custom?: number;
  fnCurrentLesson: (id: number) => void;
  fnCurrentSubLesson: (id: number) => void;
  id: number;
  sublesson: Lesson;
}

const SubLesson: FC<SublessonsComp> = ({
  custom,
  fnCurrentLesson,
  fnCurrentSubLesson,
  id,
  sublesson,
}) => {
  const fnCurrentDescription = (idArg: number, sublessonArg: Lesson) => {
    fnCurrentLesson(idArg);
    fnCurrentSubLesson(sublessonArg?.id);
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
  };
  return (
    <motion.button
      animate="visible"
      className={styles.wrapper}
      custom={custom}
      onClick={() => fnCurrentDescription(id, sublesson)}
      type="button"
      variants={variants}
    >
      <span className={styles.title}>
        {id}
        .
        {sublesson?.id}
        {' '}
        {sublesson?.title}
      </span>
    </motion.button>
  );
};

export default SubLesson;
