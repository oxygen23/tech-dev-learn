"use client";
import { selectFavorites } from "@/redux/slices/favoritesCourses";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import styles from "./ButtonFavorite.module.sass";
import { PreviewCourse } from "@/types/PreviewCourse";
import { RootCourse } from "@/types/Course";

const ButtonFavorites: React.FC<PreviewCourse> = ({ fnFavorite, item }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const { favorites } = useSelector(selectFavorites);

	useEffect(() => {
		const foundCourse = favorites.find(
			(favCourse: RootCourse) => favCourse.id === item.id
		); 
		setIsFavorite(!!foundCourse);
	}, [favorites, item.id]);

	return (
		<button onClick={() => fnFavorite(item)} className={styles.button}>
			{isFavorite ? (
				<AiFillHeart className={styles.isFavorite} />
			) : (
				<AiOutlineHeart />
			)}
		</button>
	);
};

export default ButtonFavorites;
