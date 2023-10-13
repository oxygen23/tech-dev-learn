import axios from "@/axios";
import { wrapper } from "@/redux/store";
import { RootCourse } from "@/types/Course";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import styles from "./Course.module.sass";
import { useState } from "react";
import LessonsList from "./lessonsList/LessonsList";
import { Title } from "@/components";
interface CoursePageProps {
	course: RootCourse;
}

const CoursePage: NextPage<CoursePageProps> = ({ course }) => {
	const [currentLesson, setCurrentLesson] = useState(0);
	return (
		<>
			<NextSeo title={course.title} />
			<div className={styles.wrapper}>
				<div className={styles.wrapper_left}>
					<Title title={course.title} titleLayer={1} fontSize={40} marginBottom={28}/>
					<div className={styles.empty__block}></div>
					<div className={styles.author__block}>
						<div className={styles.author__block_left}>
							<div className={styles.author__block_image}></div>
							<div className={styles.author__block_subtitle_block}>
								<div
									className={styles.author__block_subtitle_block_title_lesson}
								></div>
								<div className={styles.author__block_subtitle_block_link}>
									{course.author_link}
								</div>
							</div>
						</div>
						<div className={styles.author__block_right}>
							<div className={styles.author__block_right_likes}></div>
							<div className={styles.author__block_right_dislikes}></div>
						</div>
					</div>
				</div>
				<div className={styles.wrapper_right}>
					<LessonsList lessonsList={course.lessons_wrapper} />
				</div>
			</div>
		</>
	);
};

export default CoursePage;

export const getServerSideProps = wrapper.getServerSideProps(
	() => async (context) => {
		const { params } = context;
		let id;
		let data = null;

		if (params && params.id) {
			id = params.id;
			const response = await axios.get(`/courses/${id}`);
			data = response.data;
		}
		return {
			props: {
				course: data,
			},
		};
	}
);
