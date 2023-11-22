import Title from '@/components/title/Title';
import { LessonsWrapper } from '@/types/LessonsWrapper';
import { FC, useContext } from 'react';

import { CourseContext } from '../CourseContext';
import styles from './LessonsList.module.sass';
import SubLessonsWrapper from './lessons/SubLessonsWrapper';

interface LessonsComp {
  lessonsList: LessonsWrapper[];
}

const LessonsList: FC<LessonsComp> = ({ lessonsList }) => {
  const contextValues = useContext(CourseContext);
  return (
    <>
      <Title fontSize={40} marginBottom={28} title="Уроки" titleLayer={1} />
      <div
        className={styles.wrapper_lessons}
      >
        {lessonsList?.map((item: LessonsWrapper, index) => (
          <SubLessonsWrapper
            countingLesson={index + 1}
            custom={index}
            // currentSubLesson={contextValues.currentSubLesson}
            fnCurrentLesson={contextValues.setCurrentLesson}
            fnCurrentSubLesson={contextValues.setCurrentSubLesson}
            key={index}
            lesson={item}
          />
        ))}
      </div>
    </>
  );
};

export default LessonsList;
