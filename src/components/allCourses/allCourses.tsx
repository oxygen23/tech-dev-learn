import { RootCourse } from "@/types/Course";
import Title from "../title/Title";
import { PreviewCourse } from "..";

const AllCourses: React.FC<any> = ({ allCourses }) => {
	const handleChangeFavorite = () => {
		console.log(123)
	}
	return (
		<>
			<Title titleLayer={1} title={"Все курсы"} />
			<div className="wrapper allCourses">
				{allCourses.map((item: RootCourse, index: number) => (
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
