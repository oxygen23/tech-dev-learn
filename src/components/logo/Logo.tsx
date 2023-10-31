import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Logo.module.sass';

interface LogoProps {
  visible: boolean;
}

const Logo: FC<LogoProps> = ({ visible }) => (
  <div className={styles.logo__block}>
    <Link className={styles.logo__text} href="/">
      <Image
        alt="logo"
        className={styles.logo__svg}
        height={56}
        src="/assets/logo.svg"
        style={
          !visible
            ? { margin: '0 auto', right: '3%', width: '100%' }
            : undefined
        }
        width={56}
      />
      {visible ? (
        <span>TechDevLearn</span>
      ) : (
        <span style={{ left: '-300px' }}>TechDevLearn</span>
      )}
    </Link>
  </div>
);

export default Logo;
