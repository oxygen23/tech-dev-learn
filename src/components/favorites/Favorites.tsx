"use client";
import {
	changeFavorite,
	selectFavorites,
} from "@/redux/slices/favoritesCourses";
import { useSelector } from "react-redux";
import { PreviewCourse } from "..";
import Title from "../title/Title";
import { RootCourse } from "@/types/Course";
import { FC } from "react";

const Favorites: FC = () => {
	// const dispatch = useAppDispatch();
	// const { favorites } = useSelector(selectFavorites);

	// function handleChangeFavorite(course: RootCourse) {
	// 	dispatch(changeFavorite(course));
	// }
	return (
		<>
			<Title title={"Твои избранныне курсы"} titleLayer={1}></Title>
			<div className="wrapper">
				{/* {favorites?.length > 0 ? (
					favorites.map((item: RootCourse, index: number) => (
						<PreviewCourse
							key={index}
							item={item}
							fnFavorite={handleChangeFavorite}
						/>
					))
				) : (
					<Title title={"У тебя нет курсов в избранном"} titleLayer={2}></Title>
				)} */}
				Избранное
			</div>
		</>
	);
};

export default Favorites;
