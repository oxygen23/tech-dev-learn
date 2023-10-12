import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";

const Notifications = () => {
	return (
    <div>
      
			<Link href="/" className="personal__button">
				<IoIosNotificationsOutline />
			</Link>
		</div>
	);
};

export default Notifications;
