import axios from "@/axios";
import { PopularCourses, UnfinnishedCourses } from "@/components";
import Title from "@/components/title/Title";
import { wrapper } from "@/redux/store";
import { RootUser } from "@/types/User";
import { AxiosResponse } from "axios";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import styles from './Home.module.sass'

const Home: NextPage = ({
	unfinishedCourses,
	popularCourses,
	popularAuthors
}: any) => {
	return (
		<div className={styles.home}>
			<NextSeo title="TechDevLearn" />
			<div className="styles.home__unfinnished">
				<Title title={"Твои незаконченные курсы"} titleLayer={1}>
					<button className={styles.home__title_button}>
						<span className={styles.home__title_button_item} />
						<span className={styles.home__title_button_item} />
						<span className={styles.home__title_button_item} />
					</button>
				</Title>
				<div className={styles.home__unfinnished_block}>
					<UnfinnishedCourses {...unfinishedCourses} />
				</div>
			</div>
			<div className={styles.home__popular}>
				<Title title={"Популярные авторы и их лучшие курсы"} titleLayer={2}>
					<button className={styles.home__title_button}>
						<span className={styles.home__title_button_item} />
						<span className={styles.home__title_button_item} />
						<span className={styles.home__title_button_item} />
					</button>
				</Title>
				<div className={styles.home__authors}>
					<PopularCourses
						popularCourses={popularCourses}
						popularAuthors={popularAuthors}
					/>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps(() => async () => {
		const userData: AxiosResponse<RootUser> = await axios.get("/user");
		const popularCoursesData: AxiosResponse<RootUser> = await axios.get(
			"/authors"
		);
		const popularsAuthors: AxiosResponse<RootUser> = await axios.get(
			"/authors?_embed=author_courses&_sort=likes&_order=desc"
		);
		return {
			props: {
				unfinishedCourses: userData.data,
				popularCourses: popularCoursesData.data,
				popularAuthors: popularsAuthors.data,
			},
		};
	});

export default Home;
