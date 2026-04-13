import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page Not Found</p>

      <Link to="/" className={styles.button}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;