import { LessonsWrapper } from '@/types/LessonWrapper';
import { FC, useState } from 'react';

import SubLesson from './SubLesson';
import styles from './SubLessonsWrapper.module.sass';

interface LessonComp {
  countingLesson: number;
  fnCurrentLesson: (id: number) => void;
  fnCurrentSubLesson: (id: number) => void;
  lesson: LessonsWrapper;
}

const SubLessonsWrapper: FC<LessonComp> = ({
  countingLesson,
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
    <div className={styles.wrapper}>
      <button
        className={styles.wrapper_lesson}
        onClick={() => handleCurrentLesson(lesson?.id)}
        type="button"
      >
        <div className={styles.icon_block} />
        <div
          className={styles.wrapper_info}
          style={
            currentLesson === lesson?.id
              ? { borderBottomColor: 'transparent' }
              : undefined
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
      {currentLesson === lesson?.id && (
        <div className={styles.wrapper_sublessons}>
          {lesson.lessons.map((item, index) => (
            <SubLesson
              fnCurrentLesson={fnCurrentLesson}
              fnCurrentSubLesson={fnCurrentSubLesson}
              id={lesson?.id}
              key={index}
              sublesson={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubLessonsWrapper;
