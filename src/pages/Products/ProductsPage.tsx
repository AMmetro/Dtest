import React, { useCallback, useEffect, useState } from "react";
import styles from "./Tables.module.css";
import ProductsTable from "./TablePage";
import PageHeader from "./PageHeader/PageHeader";
import { getProducts, searchProducts } from "../../api/products";
import { Data } from "./ProductsTypes";
import Paginations from "./Paginations/Pagination";
import AddProducts from "./AddProducts/AddProducts";

interface Product {
    id: number;
    name: string;
    brand: string;
    sku: string;
    rating: number;
    price: number;
    categorySubText?: string;
}

const ProductsPage: React.FC = () => {

    const [data, setData] = useState<Data>({} as Data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await getProducts();
            setData(response);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const itemsPerPage = 5;
    const totalItems = data?.products?.length;

    const handleSearchChange = useCallback(async (query: string) => {
        setLoading(true);
        const result = await searchProducts(query);
        console.log("result");
        console.log(result);
        setData(result)
        setCurrentPage(1); // Сброс на первую страницу при новом поиске
    }, []);


    // Пагинация
    const paginatedProducts = data?.products?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <PageHeader onSearch={handleSearchChange} />
            <AddProducts onAdd={()=>{}} onRefresh={()=>{}} />
            <ProductsTable products={data.products} />
            <Paginations
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

export default ProductsPage;

