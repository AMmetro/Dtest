import React from "react";
import styles from "./SorterButton.module.css";

type SortButtonProps = {
    onClick?: () => void;
    sortOrder: "asc" | "desc";
};

const SortButton: React.FC<SortButtonProps> = ({ onClick, sortOrder}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <svg
                className={sortOrder === "desc" ? styles.rotated : ""}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </button>
    );
};

export default SortButton;