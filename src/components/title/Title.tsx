import React, { ReactNode } from "react";
import styles from "./Title.module.sass";

interface TitleProps {
	title: string;
	titleLayer: number;
	children?: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title, titleLayer, children }) => {
	let Tag: keyof JSX.IntrinsicElements = "h6";

	if (titleLayer >= 1 && titleLayer <= 6) {
		Tag = `h${titleLayer}` as keyof JSX.IntrinsicElements;
	}

	return (
		<Tag className={styles.title}>
			{title} {children}
		</Tag>
	);
};

export default Title;
