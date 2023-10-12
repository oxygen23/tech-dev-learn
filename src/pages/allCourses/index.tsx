import axios from "@/axios";
import { AllCourses } from "@/components";
import { wrapper } from "@/redux/store";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
const AllCoursesPage: NextPage<any> = ({ allCourses }) => {
	return (
		<>
			<NextSeo title="Все курсы" />
			<AllCourses allCourses={allCourses} />
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
	const { data } = await axios.get("/courses");
	return {
		props: {
			allCourses: data,
		},
	};
});

export default AllCoursesPage;
