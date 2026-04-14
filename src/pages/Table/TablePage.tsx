import React, { use, useEffect, useState } from "react";
import styles from "./Tables.module.css";
import { getProducts } from "../../api/products";
import { Product } from "./ProductsTypes";

const ProductsTable: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    const {products, total, skip, limit } = await getProducts();
    setProducts(products);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>Наименование</th>
            <th>Вендор</th>
            <th>Артикул</th>
            <th>Оценка</th>
            <th>Цена, ₽</th>
            <th>Количество</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <input type="checkbox" />
              </td>

              <td>
                <div className={styles.productName}>
                  <div className={styles.avatar} />
                  <div>
                    <div>{p.name}</div>
                    <div className={styles.subText}>{p.category}</div>
                  </div>
                </div>
              </td>

              <td>{p.vendor}</td>
              <td>{p.sku}</td>

              <td>
                <span
                  className={
                    p.rating < 4 ? styles.badRating : styles.goodRating
                  }
                >
                  {p.rating}/5
                </span>
              </td>

              <td>{p.price.toLocaleString("ru-RU")} ₽</td>

              <td>
                <div className={styles.quantity}>
                  <div className={styles.bars}></div>
                  <button className={styles.addBtn}>+</button>
                </div>
              </td>

              <td>
                <button className={styles.moreBtn}>⋯</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;