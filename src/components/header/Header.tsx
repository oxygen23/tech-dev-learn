import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import Notifications from "./Notifications";
import { Search } from "..";
const Header: React.FC = () => {
	return (
		<header className="header">
			<Search />
			<div className="header__block">
				<Link href="/" className="personal__button">
					<AiOutlineUser />
				</Link>
				<Notifications />
			</div>
		</header>
	);
};

export default Header;
