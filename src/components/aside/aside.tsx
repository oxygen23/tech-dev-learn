import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import ButtonsAside from '../buttons/ButtonsAside';
import Logo from '../logo/Logo';
import styles from './Aside.module.sass';
// import useWindowWidth from "@/hooks/useWindowWidth";
const Aside: FC = () => {
  const [visible, setVisible] = useState(false);
  const path = usePathname();
  // const windowWidth = useWindowWidth();

  useEffect(() => {
    if (
      path === '/favorites' ||
      path === '/allCourses' ||
      path === '/progress' ||
      path === '/'
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [path]);

  useEffect(() => {
    const element = document.getElementById('__next');
    if (element) {
      element.style.paddingLeft = !visible ? '30px' : '62px';
    }
  }, [visible]);
  return (
    <aside
      className={visible ? styles.aside : `${styles.aside} ${styles.noVisible}`}
    >
      <Logo visible={visible} />
      <ButtonsAside visible={visible} />
      {visible ? (
        <div className={styles.support__absolute}>
          <div className={styles.support__block}>
            <div className={styles.support__wrapper}>
              <span className={styles.support__wrapper_title}>
                Есть предложения?
              </span>
              <span className={styles.support__wrapper_suptitle}>
                Свяжитесь со мной
              </span>
              <a
                className={styles.support__block_link}
                href="https://t.me/oxygenfront"
                target="_blank"
                rel="noopener noreferrer"
              >
                Телеграм
              </a>
            </div>
            <div className={styles.support__circle}>
              <Image
                src="/assets/human_worked.png"
                alt="decor_png"
                className={styles.support__circle_image}
                width={124}
                height={175}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.support__block} ${styles.wrapper}`}>
          <a
            href="https://t.me/oxygenfront"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.support__block} ${styles.wrapper} ${styles.icon}`}
          >
            <BiSupport />
          </a>
        </div>
      )}
    </aside>
  );
};

export default Aside;
