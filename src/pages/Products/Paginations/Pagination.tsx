import React from 'react';
import styles from './Paginations.module.css';

interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalItems,
    itemsPerPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= Math.min(5, totalPages); i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={i === currentPage ? styles.activePage : ''}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className={styles.paginationContainer}>
            <div className={styles.paginationInfo}>
                Показано {startItem}-{endItem} из {totalItems}
            </div>
            <div className={styles.paginationControls}>{renderPageNumbers()}</div>
        </div>
    );
};

export default Pagination;