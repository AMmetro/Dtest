import React, { useState } from 'react';
import styles from './AddProducts.module.css';
import AddProductModal from '../AddProductsModal/AddProductsModal';

const TableActions: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const onAdd = () => {
      setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onRefresh = () => {
    // todo
  };

  return (
    <>
      <AddProductModal
        isOpen={isOpen} 
        onClose={onClose} 
        onAdd={() => { }}
      />
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
    </>
  );
};

export default TableActions;