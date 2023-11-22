import PreviewCourse from '@/components/previewCourse/PreviewCourse';
import Title from '@/components/title/Title';
import { Course } from '@/types/Course';

interface AllCoursesProps {
  allCourses: Course[];
}

const AllCourses: React.FC<AllCoursesProps> = ({ allCourses }) => (
  // const handleChangeFavorite = () => {};
  <>
    <Title title="Все курсы" titleLayer={1} />
    <div className="wrapper allCourses">
      {allCourses.map((item: Course, index: number) => (
        <PreviewCourse item={item} key={index} />
      ))}
    </div>
  </>
);
export default AllCourses;
