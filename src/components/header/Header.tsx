import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './Header.module.sass';
import Notifications from './Notifications';
import Search from '../search/Search';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Search />
      <div className={styles.header__block}>
        <Link href="/" className={styles.personal__button}>
          <AiOutlineUser />
        </Link>
        <Notifications />
      </div>
    </header>
  );
};

export default Header;
