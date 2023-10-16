import { LessonsWrapper } from '@/types/LessonWrapper';
import { FC, useState } from 'react';
import SubLessons from './SubLessons';
import styles from './SubLessonsWrapper.module.sass';

interface LessonComp {
  lesson: LessonsWrapper;
  countingLesson: number;
  fnCurrentLesson: (id: number) => void;
  fnCurrentSubLesson: (id: number) => void;
}

const SubLessonsWrapper: FC<LessonComp> = ({
  lesson,
  countingLesson,
  fnCurrentLesson,
  fnCurrentSubLesson,
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
        type="button"
        className={styles.wrapper_lesson}
        onClick={() => handleCurrentLesson(lesson?.id)}
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
          <div className={styles.title}>Тема урока {lesson?.title}</div>
          <div className={styles.subtitle}>
            <div className={styles.counting_lesson}>
              Lesson {countingLesson}
            </div>
            <span className={styles.dot} />
            <div className={styles.counting_cards}>5 карточек</div>
          </div>
        </div>
      </button>
      {currentLesson === lesson?.id && (
        <div className={styles.wrapper_sublessons}>
          {lesson.lessons.map((item, index) => (
            <SubLessons
              sublesson={item}
              key={index}
              id={lesson?.id}
              fnCurrentSubLesson={fnCurrentSubLesson}
              fnCurrentLesson={fnCurrentLesson}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubLessonsWrapper;
