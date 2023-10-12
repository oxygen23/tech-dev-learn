import { Header } from "@/components";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
interface Props {
	children: ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const path = usePathname();

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
		<main className={visible ? "main" : "main visible"}>
			<Header />
			{children}
		</main>
	);
};

export default MainLayout;
