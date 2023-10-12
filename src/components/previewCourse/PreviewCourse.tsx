import ButtonFavorite from "@/components/buttons/ButtonFavorite";
import { PreviewCourse } from "@/types/PreviewCourse";
import Image from "next/image";
import { FC } from "react";
import styles from "./PrevewCourse.module.sass";
import Link from "next/link";
const PreviewCourse: FC<PreviewCourse> = ({ item, fnFavorite }) => {
	return (
		<Link href={`/course/${item.id}`} className={styles.preview}>
			<Image
				src={item.course_image}
				fill
				alt="Фоновое изображение"
				className={styles.preview__background}
			></Image>
			<div
				className={styles.preview__mask}
				style={{
					background:
						"linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.50) 51.04%, #000 100%)",
				}}
			></div>

			<div className={styles.preview__content}>
				<div className={styles.preview__content_header}>
					<div className={styles.preview__content_header_left}>
						<Image
							className={styles.preview__content_header_image}
							alt="Фото автора"
							src={item.author_image}
							width={50}
							height={50}
						></Image>
						<div className={styles.preview__content_header_author_block}>
							<div className={styles.preview__content_header_author_block_name}>
								{item.author}
							</div>
							<div className={styles.preview__content_header_author_block_link}>
								{item.author_link}
							</div>
						</div>
					</div>
					<div className={styles.preview__content_header_block}>
						<ButtonFavorite fnFavorite={fnFavorite} item={item} />
						<div className={styles.preview__content_header_block_time}>
							{item.course_time} Минут
						</div>
					</div>
				</div>
				<p className={styles.preview__content_title}>{item.title}</p>
				<div className={styles.preview__content_bottom}>{item.description}</div>
			</div>
		</Link>
	);
};

export default PreviewCourse;
