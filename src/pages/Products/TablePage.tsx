import React, { use, useEffect, useState } from "react";
import styles from "./Tables.module.css";
import { Product } from "./ProductsTypes";
import { LOW_RATING } from "../../Constant/constant";

const ProductsTable: React.FC<{ products: Product[] }> = ({ products }) => {

  if (!products || products.length === 0) {
    return <div>Ничего не найдено...</div>;
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
            <th></th>
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
                    <div>{p.title}</div>
                    <div className={styles.subText}>{p.category}</div>
                  </div>
                </div>
              </td>

              <td>{p.brand}</td>
              <td>{p.sku}</td>

              <td>
                <span
                  className={
                    p.rating < LOW_RATING ? styles.badRating : styles.goodRating
                  }
                >
                  {p.rating}/5
                </span>
              </td>

              <td>{p.price.toLocaleString("ru-RU")} ₽</td>

              <td>
                <div className={styles.quantity}>
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