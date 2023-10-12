import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { HiOutlineViewGridAdd } from "react-icons/hi";

interface ButtonsAsideProps {
	visible: boolean;
}

const ButtonsAside: React.FC<ButtonsAsideProps> = ({ visible }) => {
	const buttons = [
		"Домашняя страница",
		"Все курсы",
		"Избранные курсы",
		"Прогресс",
	];
	const links = ["/", "/allCourses", "/favorites", "/progress"];
	const [currentPagePath, setCurrentPagePath] = useState<string>("");
	const [page, setPage] = useState<number>(0);

	useEffect(() => {
		const savedPagePath = localStorage.getItem("currentPagePath");
		setCurrentPagePath(savedPagePath || "");
		setPage(links.indexOf(currentPagePath));
	}, [currentPagePath]);

	return (
		<div className="buttons__absolute">
			<div className="buttons__block">
				{visible ? (
					<div
						className="active__block"
						style={
							page === 0
								? { top: "-70px" }
								: page === 1
								? { top: "-15px" }
								: page === 2
								? { top: "40px" }
								: page === 3
								? { top: "95px" }
								: undefined
						}
					>
						<div className="active__item_fiol"></div>
						<div className="active__item_fiol"></div>
						<div className="active__item_block">
							<div className="active__item"></div>
							<div className="active__item"></div>
							<div className="active__item"></div>
						</div>
					</div>
				) : (
					<div className="active__block">
						<div className="active__item_fiol" style={{ right: "500px" }}></div>
						<div className="active__item_fiol" style={{ right: "500px" }}></div>
						<div className="active__item_block">
							<div className="active__item" style={{ right: "-200px" }}></div>
							<div className="active__item" style={{ right: "-200px" }}></div>
							<div className="active__item" style={{ right: "-200px" }}></div>
						</div>
					</div>
				)}
				{buttons.map((item, index) => (
					<Link
						onClick={() => setPage(index)}
						href={`${links[index]}`}
						key={index}
						className={
							!visible
								? "buttons__block-item center"
								: page === index
								? "buttons__block-item active"
								: "buttons__block-item"
						}
					>
						{item === buttons[0] ? (
							<AiOutlineHome />
						) : item === buttons[1] ? (
							<HiOutlineViewGridAdd />
						) : item === buttons[2] ? (
							<AiOutlineHeart />
						) : item === buttons[3] ? (
							<GiProgression />
						) : null}
						{visible ? (
							<span className="buttons__block-item_text">{item}</span>
						) : (
							<span
								className="buttons__block-item_text"
								style={{ right: "-300px", zIndex: "-9999" }}
							>
								{item}
							</span>
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default ButtonsAside;
