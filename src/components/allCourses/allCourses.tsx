import { Course } from "@/types/Course";
import { PreviewCourse, Title } from "..";

const AllCourses: React.FC<any> = ({ allCourses }) => {
  const handleChangeFavorite = () => {
    console.log(123);
  };
  return (
    <>
      <Title titleLayer={1} title={"Все курсы"} />
      <div className="wrapper allCourses">
        {allCourses.map((item: Course, index: number) => (
          <PreviewCourse
            key={index}
            item={item}
            fnFavorite={handleChangeFavorite}
          />
        ))}
      </div>
    </>
  );
};

export default AllCourses;
