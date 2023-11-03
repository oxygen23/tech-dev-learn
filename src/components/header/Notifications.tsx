import Link from 'next/link';
import { IoIosNotificationsOutline } from 'react-icons/io';

import styles from './Notification.module.sass';

const Notifications = () => (
  <div>
    <Link className={styles.personal__button} href="/">
      <IoIosNotificationsOutline />
    </Link>
  </div>
);

export default Notifications;
