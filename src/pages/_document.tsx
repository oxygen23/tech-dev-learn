import { Head, Html, Main, NextScript } from "next/document";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
interface DocumentProps {
	currentPagePath: string;
}
const Document: FC<DocumentProps> = () => {
	return (
		<Html lang="ru">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
