import Link from 'next/link';
import { IoIosNotificationsOutline } from 'react-icons/io';
import styles from './Notification.module.sass';

const Notifications = () => {
  return (
    <div>
      <Link href="/" className={styles.personal__button}>
        <IoIosNotificationsOutline />
      </Link>
    </div>
  );
};

export default Notifications;
