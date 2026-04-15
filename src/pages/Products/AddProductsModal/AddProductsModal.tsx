import React, { useState } from "react";
import styles from "./AddProducts.module.css";
import { Product } from "../ProductsTypes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
};

const AddProductModal: React.FC<Props> = ({isOpen, onAdd, onClose }) => {

  

  const [form, setForm] = useState<Product>({
    id: Date.now(),
    title: "",
    category: "",
    brand: "",
    sku: "",
    rating: 0,
    price: 0,
  });

  if (!isOpen) return null;


  const onOpen = () => {
    // setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    onAdd({ ...form, id: Date.now() });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Добавить товар</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className={styles.body}>
          <div className={styles.field}>
            <label>Наименование</label>
            <input name="title" onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>Категория</label>
            <input name="category" onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>Вендор</label>
            <input name="brand" onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>Артикул</label>
            <input name="sku" onChange={handleChange} />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Оценка</label>
              <input name="rating" type="number" min="0" max="5" onChange={handleChange} />
            </div>

            <div className={styles.field}>
              <label>Цена</label>
              <input name="price" type="number" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancel} onClick={onClose}>
            Отмена
          </button>
          <button className={styles.submit} onClick={handleSubmit}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
