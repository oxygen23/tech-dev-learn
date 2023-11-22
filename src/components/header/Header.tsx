import Search from '@/components/search/Search';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

import styles from './Header.module.sass';
import Notifications from './Notifications';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Search />
    <div className={styles.header__block}>
      <Link href="/">
        <motion.div
          className={styles.personal__button}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}

        >
          <AiOutlineUser />

        </motion.div>
      </Link>
      <Notifications />
    </div>
  </header>
);

export default Header;
