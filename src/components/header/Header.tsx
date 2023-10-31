import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

import Search from '../search/Search';
import styles from './Header.module.sass';
import Notifications from './Notifications';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Search />
    <div className={styles.header__block}>
      <Link className={styles.personal__button} href="/">
        <AiOutlineUser />
      </Link>
      <Notifications />
    </div>
  </header>
);

export default Header;
