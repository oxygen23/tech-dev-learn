import Image from "next/image";
import Link from "next/link";
import ButtonsAside from "../buttons/ButtonsAside";
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BiSupport } from "react-icons/bi";

const Aside: FC = () => {
	const [visible, setVisible] = useState(false);
	const path = usePathname();
	const [windowWidth, setWindowWidth] = useState<number>(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (
			path === "/favorites" ||
			path === "/allCourses" ||
			path === "/progress" ||
			path === "/"
		) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [path]);

	return (
		<aside className={visible ? "aside" : "aside noVisible"}>
			<div className="logo__block">
				<Link href="/" className="logo__text">
					<Image
						src="/assets/logo.svg"
						alt="logo"
						className="logo__svg"
						width={56}
						height={56}
					/>
					{visible ? (
						<span>TechDevLearn</span>
					) : (
						<span style={{ left: "-300px" }}>TechDevLearn</span>
					)}
				</Link>
			</div>
			<ButtonsAside visible={visible} />
			{visible ? (
				<div className="support__absolute">
					<div className="support__block">
						<div className="support__wrapper">
							<span className="support__wrapper_title">Есть предложения?</span>
							<span className="support__wrapper_suptitle">
								Свяжитесь со мной
							</span>
							<a
								className="support__block_link"
								href="https://t.me/oxygenfront"
								target="_blank"
								rel="noopener noreferrer"
							>
								Телеграм
							</a>
						</div>
						<div className="support__circle">
							<Image
								src="/assets/human_worked.png"
								alt="decor_png"
								className="support__circle_image"
								width={124}
								height={175}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="support__block wrapper">
					<a
						href="https://t.me/oxygenfront"
						target="_blank"
						rel="noopener noreferrer"
						className="support__block wrapper icon"
					>
						<BiSupport />
					</a>
				</div>
			)}
		</aside>
	);
};

export default Aside;
