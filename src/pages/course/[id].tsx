import axios from "@/axios";
import Title from "@/components/title/Title";
import { wrapper } from "@/redux/store";
import { RootCourse } from "@/types/Course";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import styles from "./Course.module.sass";
interface CoursePageProps {
	course: RootCourse;
}

const CoursePage: NextPage<CoursePageProps> = ({ course }) => {
	return (
		<>
			<NextSeo title={course.title} />
			<div className={styles.wrapper}>
				<div className={styles.wrapper_left}>
					<Title title={course.title} titleLayer={1} />
					
				</div>
				<div className={styles.wrapper_right}></div>
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
