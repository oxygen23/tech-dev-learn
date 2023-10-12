import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ChildrenProps } from "./Utils";

const PageWrapper = ({ children }: ChildrenProps): JSX.Element => {
	const path = usePathname();

	useEffect(() => {
		// Сохраняем текущий путь страницы в localStorage
		localStorage.setItem("currentPagePath", path);
	}, [path]);

	return <>{children}</>;
};

export default PageWrapper;
