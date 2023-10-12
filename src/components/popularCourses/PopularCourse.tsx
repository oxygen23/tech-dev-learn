import { RootCourse } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const PopularCourse: FC<RootCourse> = ({ author_image, course_image, id }) => {
	return (
		<Link
			href={`/course/${id}`}
			className="popular"
			style={{ backgroundImage: `url(${course_image})` }}
		>
			<Image
				src={course_image}
				fill
				alt="Фоновое изображение"
				className="popular__background"
			></Image>
			<div
				className="popular__mask"
				style={{
					background:
						"linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgb(0, 0, 0) 100%)",
				}}
			></div>
			<div className="popular__bottom">
				<Image
					width={60}
					height={60}
					alt="Фото автора"
					src={author_image}
					className="popular__author"
				/>
			</div>
		</Link>
	);
};

export default PopularCourse;
