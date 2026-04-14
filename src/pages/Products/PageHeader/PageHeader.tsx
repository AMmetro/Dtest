import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import useDebounce from '../../../Utils/Debounse';
import { PageHeaderProps } from '../ProductsTypes';

const Header: React.FC<PageHeaderProps> = ({ onSearch, delay = 500 }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Товары</h1>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Найти"
          className={styles.searchInput}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Header;