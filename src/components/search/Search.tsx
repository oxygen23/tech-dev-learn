import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

import styles from './Search.module.sass';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [focused, setIsFocused] = useState<boolean>(false);

  function fnInputValue(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function performSearch() {}

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      performSearch();
    }
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <div
      className={focused ? `${styles.search} ${styles.focused}` : styles.search}
    >
      <div className={styles.search__wrapper}>
        <BsSearch className={styles.search__button} />
        <input
          value={inputValue}
          onChange={fnInputValue}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          placeholder="Поиск курсов"
          className={styles.search__input}
        />
      </div>
      <button
        type="button"
        className={styles.search__button}
        onClick={performSearch}
      >
        <AiOutlineEnter />
      </button>
    </div>
  );
};

export default Search;
