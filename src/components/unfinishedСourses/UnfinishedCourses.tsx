import { CoursesStarted, RootUser } from "@/types/User";
import { FC, useEffect, useState } from "react";
import { PreviewCourse } from "..";
import { RootCourse } from "@/types/Course";

const UnfinishedCourses: FC<RootUser> = ({ courses_started }) => {
	const [windowWidth, setWindowWidth] = useState<number | null>(null);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowWidth]);

	function handleChangeFavorite(course: RootCourse) {
		console.log(123)
		// dispatch(changeFavorite(course));
	}

	// const slicesCourses: CoursesStarted[] = Array.isArray(courses_started)
	// 	? windowWidth !== null && windowWidth < 1440 && courses_started.length > 2
	// 		? courses_started.slice(0, 1)
	// 		: windowWidth !== null && windowWidth < 1920 && courses_started.length > 2
	// 		? courses_started.slice(0, 2)
	// 		: courses_started
	// 	: [];
	return (
		<div className="wrapper unfinished">
			{courses_started
				.slice(0, 2)
				.map((item: CoursesStarted, index: number) => (
					<PreviewCourse
						key={index}
						item={item}
						fnFavorite={handleChangeFavorite}
					/>
				))}
		</div>
	);
};

export default UnfinishedCourses;
