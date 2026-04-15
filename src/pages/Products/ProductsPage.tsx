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
    const fetchProducts = useProductsStore((state) => state.fetchProducts);
    const searchProducts = useProductsStore((state) => state.searchProducts);
    const sortOrder = useProductsStore((state) => state.sortOrder);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const itemsPerPage = 5;
    const totalItems = data?.products?.length;

    const handleSearchChange = useCallback(async (query: string) => {
        await searchProducts(query);
    }, [searchProducts]);

    const sortedProducts = [...(data?.products || [])].sort((a, b) => {
    if (sortOrder === "asc") {
        return a.price - b.price;
    }
    return b.price - a.price;
});

    return (
        <div className={styles.pageWraper}>
            <PageHeader onSearch={handleSearchChange} />
            {loading ? null : <AddProducts />}
            {loading ? < ProgressBar /> : <ProductsTable products={sortedProducts} />}
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

