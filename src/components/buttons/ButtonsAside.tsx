import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

import styles from './ButtonsAside.module.sass';

interface ButtonsAsideProps {
  visible: boolean;
}

const ButtonsAside: React.FC<ButtonsAsideProps> = ({ visible }) => {
  const buttons = [
    'Домашняя страница',
    'Все курсы',
    'Избранные курсы',
    'Прогресс',
  ];
  const links = useMemo(
    () => ['/', '/allCourses', '/favorites', '/progress'],
    [],
  );
  const pageStyles: { [key: number]: { top: string } } = {
    0: { top: '-60px' },
    1: { top: '-5px' },
    2: { top: '50px' },
    3: { top: '105px' },
  };
  const [currentPagePath, setCurrentPagePath] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const savedPagePath = localStorage.getItem('currentPagePath');
    setCurrentPagePath(savedPagePath || '');
    setPage(links.indexOf(currentPagePath));
  }, [currentPagePath, links]);

  const renderIcons = (item: string) => {
    if (item === buttons[0]) {
      return <AiOutlineHome />;
    }
    if (item === buttons[1]) {
      return <HiOutlineViewGridAdd />;
    }
    if (item === buttons[2]) {
      return <AiOutlineHeart />;
    }
    if (item === buttons[3]) {
      return <GiProgression />;
    }

    return null; // Возврат значения по умолчанию, если ни одно из условий не выполняется
  };

  const currentClassName = (index: number) => {
    if (!visible) {
      return `${styles.buttons__block_item}  ${styles.center} `;
    }
    if (page === index) {
      return `${styles.buttons__block_item} ${styles.active}`;
    }
    return styles.buttons__block_item;
  };

  return (
    <div className={styles.buttons__absolute}>
      <div className={styles.buttons__block}>
        {visible ? (
          <div className={styles.active__block} style={pageStyles[page]}>
            <div className={styles.active__wrapper}>
              <div className={`${styles.active__fiol_block} ${styles.top}`}>
                <div className={styles.active__fiol_block_fiol} />
                <div className={styles.active__fiol_block_white} />
              </div>
              <div className={styles.active__item_block}>
                <div className={styles.active__item} />
              </div>
              <div
                className={`${styles.active__fiol_block}  ${styles.bottom} `}
              >
                <div className={styles.active__fiol_block_fiol} />
                <div className={styles.active__fiol_block_white} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.active__block} style={pageStyles[page]}>
            <div className={styles.active__wrapper}>
              <div className={`${styles.active__fiol_block}  ${styles.top} `}>
                <div className={styles.active__fiol_block_fiol} />
                <div
                  className={styles.active__fiol_block_white}
                  style={{ borderRadius: '32px', bottom: '10px' }}
                />
              </div>
              <div
                className={styles.active__item_block}
                style={{ right: '-200px' }}
              >
                <div className={styles.active__item} />
              </div>
              <div className={`${styles.active__fiol_block} ${styles.bottom}`}>
                <div className={styles.active__fiol_block_fiol} />
                <div
                  className={styles.active__fiol_block_white}
                  style={{ borderRadius: '32px', top: '10px' }}
                />
              </div>
            </div>
          </div>
        )}
        {buttons.map((item, index) => (
          <Link
            className={currentClassName(index)}
            href={`${links[index]}`}
            key={index}
            onClick={() => setPage(index)}
          >
            {renderIcons(item)}
            {visible ? (
              <span className={styles.buttons__block_item_text}>{item}</span>
            ) : (
              <span
                className={styles.buttons__block_item_text}
                style={{ right: '-200px', zIndex: '-9999' }}
              >
                {item}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonsAside;
