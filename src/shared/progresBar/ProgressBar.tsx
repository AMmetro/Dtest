import styles from "./ProgressBar.module.css";

const ProgressBar: React.FC = () => {
  return (
    <>
      <div className={styles.loaderWrapper}>
        <div className={styles.progressBar}></div>
      </div>
    </>
  );
};



export default ProgressBar;