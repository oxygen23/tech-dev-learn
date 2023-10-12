import Image from "next/image";
import { FC } from "react";
import styles from "./Logo.module.sass";
import Link from "next/link";
const Logo: FC<any> = ({ visible }) => {
	return (
		<div className={styles.logo__block}>
			<Link href="/" className={styles.logo__text}>
				<Image
					src="/assets/logo.svg"
					alt="logo"
					className={styles.logo__svg}
					width={56}
					height={56}
					style={
						!visible ? { width: "100%", margin: "0 auto", right: "3%" } : undefined
					}
				/>
				{visible ? (
					<span>TechDevLearn</span>
				) : (
					<span style={{ left: "-300px" }}>TechDevLearn</span>
				)}
			</Link>
		</div>
	);
};

export default Logo;
