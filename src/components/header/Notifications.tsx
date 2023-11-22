import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoIosNotificationsOutline } from 'react-icons/io';

import styles from './Notification.module.sass';

const Notifications = () => (
  <div>
    <Link href="/">
      <motion.div
        className={styles.personal__button}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <IoIosNotificationsOutline />

      </motion.div>
    </Link>
  </div>
);

export default Notifications;
