import React from 'react';
import styles from './AddProducts.module.css';

interface Props {
  onAdd: () => void;
  onRefresh?: () => void;
}

const TableActions: React.FC<Props> = ({ onAdd, onRefresh }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Все позиции</h3>

      <div className={styles.actions}>
        <button className={styles.refresh} onClick={onRefresh}>
          ⟳
        </button>

        <button className={styles.addButton} onClick={onAdd}>
          <span className={styles.plus}>＋</span>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default TableActions;