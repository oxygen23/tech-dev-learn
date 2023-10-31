import { ReactNode, createContext, useState } from 'react';

interface CourseContextType {
  currentLesson: number;
  currentSubLesson: number;
  setCurrentLesson: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSubLesson: React.Dispatch<React.SetStateAction<number>>;
}

interface CourseContextProviderProps {
  children: ReactNode;
}

export const CourseContext = createContext<CourseContextType>({
  currentLesson: 0,
  currentSubLesson: 0,
  setCurrentLesson: () => {},
  setCurrentSubLesson: () => {},
});

export const CourseContextProvider = ({
  children,
}: CourseContextProviderProps) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentSubLesson, setCurrentSubLesson] = useState(0);

  return (
    <CourseContext.Provider
      value={{
        currentLesson,
        currentSubLesson,
        setCurrentLesson,
        setCurrentSubLesson,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
