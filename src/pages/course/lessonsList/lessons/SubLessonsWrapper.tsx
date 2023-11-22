import { LessonsWrapper } from '@/types/LessonsWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

import SubLesson from './SubLesson';
import styles from './SubLessonsWrapper.module.sass';

interface LessonComp {
  countingLesson: number;
  custom?: number;
  // currentSubLesson: number;
  fnCurrentLesson: (id: number) => void;
  fnCurrentSubLesson: (id: number) => void;
  lesson: LessonsWrapper;
}

const SubLessonsWrapper: FC<LessonComp> = ({
  countingLesson,
  custom,
  // currentSubLesson,
  fnCurrentLesson,
  fnCurrentSubLesson,
  lesson,
}) => {
  const [currentLesson, setCurrentLesson] = useState<null | number>(null);

  const handleCurrentLesson = (id: number) => {
    if (currentLesson === null) {
      setCurrentLesson(id);
    } else {
      setCurrentLesson(null);
    }
  };
  return (
    <>
      <button
        className={styles.wrapper_lesson}
        onClick={() => handleCurrentLesson(lesson?.id)}
        type="button"

      >
        <div
          className={currentLesson === lesson?.id ? `${styles.icon_block}  ${styles.active}` : `${styles.icon_block}`}
        />
        <div
          className={styles.wrapper_info}
          style={
            currentLesson === lesson?.id
              ? { borderBottomColor: 'transparent' }
              : { borderBottom: '2px solid black' }
          }
        >
          <div className={styles.title}>
            Тема урока
            {' '}
            {lesson?.title}
          </div>
          <div className={styles.subtitle}>
            <div className={styles.counting_lesson}>
              Lesson
              {' '}
              {countingLesson}
            </div>
            <span className={styles.dot} />
            <div className={styles.counting_cards}>5 карточек</div>
          </div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {currentLesson === lesson?.id && (
          <motion.div
            animate="open"
            className={styles.wrapper_sublessons}
            exit="collapsed"
            initial="collapsed"
            key="content"
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              collapsed: { height: 0, opacity: 0 },
              open: { height: 'auto', opacity: 1 },
            }}
          >
            {lesson.lessons.map((item, index) => (
              <SubLesson
                custom={custom}
                fnCurrentLesson={fnCurrentLesson}
                fnCurrentSubLesson={fnCurrentSubLesson}
                id={lesson?.id}
                key={index}
                sublesson={item}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default SubLessonsWrapper;
