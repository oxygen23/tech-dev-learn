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
          className={styles.search__input}
          onBlur={handleBlur}
          onChange={fnInputValue}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          placeholder="Поиск курсов"
          type="text"
          value={inputValue}
        />
      </div>
      <button
        className={styles.search__button}
        onClick={performSearch}
        type="button"
      >
        <AiOutlineEnter />
      </button>
    </div>
  );
};

export default Search;
