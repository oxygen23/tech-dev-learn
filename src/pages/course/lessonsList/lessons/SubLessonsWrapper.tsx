import { LessonsWrapper } from "@/types/LessonWrapper";
import { FC, useState } from "react";
import SubLessons from "./SubLessons";
import styles from "./SubLessonsWrapper.module.sass";
interface LessonComp {
  lesson: LessonsWrapper;
  countingLesson: number;
}

const SubLessonsWrapper: FC<LessonComp> = ({ lesson, countingLesson }) => {
  const [currentLesson, setCurrentLesson] = useState<null | number>(null);

  const handleCurrentLesson = (id: number) => {
    currentLesson === null ? setCurrentLesson(id) : setCurrentLesson(null);
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.wrapper_lesson}
        onClick={() => handleCurrentLesson(lesson.id)}
      >
        <div className={styles.icon_block}></div>
        <div className={styles.wrapper_info}>
          <div className={styles.title}>Тема урока {lesson.title}</div>
          <div className={styles.subtitle}>
            <div className={styles.counting_lesson}>
              Lesson {countingLesson}
            </div>
            <span className={styles.dot}></span>
            <div className={styles.counting_cards}>5 карточек</div>
          </div>
        </div>
      </button>
      {
        <div className={styles.wrapper_sublessons}>
          {currentLesson === lesson.id &&
            lesson.lessons.map((item, index) => (
              <SubLessons sublesson={item} key={index} />
            ))}
        </div>
      }
    </div>
  );
};

export default SubLessonsWrapper;
