import { Course } from '@/types/Course';
import PreviewCourse from '../previewCourse/PreviewCourse';
import Title from '../title/Title';

interface AllCoursesProps {
  allCourses: Course[];
}

const AllCourses: React.FC<AllCoursesProps> = ({ allCourses }) => {
  // const handleChangeFavorite = () => {};
  return (
    <>
      <Title titleLayer={1} title="Все курсы" />
      <div className="wrapper allCourses">
        {allCourses.map((item: Course, index: number) => (
          <PreviewCourse key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default AllCourses;
