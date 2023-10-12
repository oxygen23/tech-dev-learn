import { RootAuthor } from "@/types/Author";
import { RootCourse } from "@/types/Course";
import PopularCourse from "./PopularCourse";

export default function PopularCourses({ popularCourses }: any): JSX.Element {
	let newCourses: RootCourse[] = [];
	popularCourses.forEach((author: RootAuthor) => {
		author.author_courses.forEach((course: RootCourse) => {
			if (!newCourses.some((prevCourse) => prevCourse.id === course.id)) {
				newCourses.push(course);
			}
		});
	});
	newCourses.sort((a, b) => b.course_likes - a.course_likes);

	return (
		<>
			{newCourses.map((item: RootCourse, index: number) => {
				const author: RootAuthor | undefined = popularCourses.find(
					(author: RootAuthor) => author.author_id === item.author_id
				);
				return author ? <PopularCourse key={index} {...item} /> : null;
			})}
		</>
	);
}
