import React, { useCallback, useEffect, useState } from "react";
import styles from "./Tables.module.css";
import ProductsTable from "./TablePage";
import PageHeader from "./PageHeader/PageHeader";
import useProductsStore from "../../store/useProductsStore";
import Paginations from "./Paginations/Pagination";
import AddProducts from "./AddProducts/AddProducts";
import ProgressBar from "../../shared/progresBar/ProgressBar";

const ProductsPage: React.FC = () => {

    const data = useProductsStore((state) => state.data);
    const loading = useProductsStore((state) => state.loading);
    const error = useProductsStore((state) => state.error);
    const fetchProducts = useProductsStore((state) => state.fetchProducts);
    const searchProducts = useProductsStore((state) => state.searchProducts);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const itemsPerPage = 5;
    const totalItems = data?.products?.length;

    const handleSearchChange = useCallback(async (query: string) => {
        await searchProducts(query);
        setCurrentPage(1); // Сброс на первую страницу при новом поиске
    }, [searchProducts]);


    // Пагинация
    const paginatedProducts = data?.products?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className={styles.pageWraper}>
            <PageHeader onSearch={handleSearchChange} />
            {loading ? null : <AddProducts />}
            {loading ? < ProgressBar /> : <ProductsTable products={data.products} />}
            {loading ? null : (
                <Paginations
                    currentPage={currentPage}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
};

export default ProductsPage;

