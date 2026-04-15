import React, { useState } from 'react';
import styles from './AddProducts.module.css';
import AddProductModal from '../AddProductsModal/AddProductsModal';
import useProductsStore from '../../../store/useProductsStore';
import SorterButton from '../../../shared/sorterButton/SorterButton';

const AddProducts: React.FC = () => {
  const { fetchProducts, sortOrder, toggleSort } = useProductsStore();
  const [isOpen, setIsOpen] = useState(false);

   const onAdd = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onRefresh = () => {
    fetchProducts();
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
          <SorterButton onClick={()=>toggleSort()} sortOrder={sortOrder} />
          <button className={styles.addButton} onClick={onAdd}>
            <span className={styles.plus}>＋</span>
            Добавить
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(AddProducts);