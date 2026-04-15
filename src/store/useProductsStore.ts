import create from 'zustand';
import { Data } from '../pages/Products/ProductsTypes';
import { getProducts, searchProducts as apiSearchProducts } from '../api/products';
import { ProductsState } from './TypesProductsStore';

const useProductsStore = create<ProductsState>((set) => ({
    data: {} as Data,
    loading: false,
    error: null,

    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const res = await getProducts();
            set({ data: res });
        } catch (err: any) {
            set({ error: err?.message ?? String(err) });
        } finally {
            set({ loading: false });
        }
    },

    addProduct: (productItem: any) => {
        set((state) => ({
            data: {
                ...state.data,
                products: [productItem, ...(state.data.products || [])],
            },
        }));
    },

    searchProducts: async (query: string) => {
        set({ loading: true, error: null });
        try {
            const res = await apiSearchProducts(query);
            set({ data: res });
        } catch (err: any) {
            set({ error: err?.message ?? String(err) });
        } finally {
            set({ loading: false });
        }
    },

    setData: (d: Data) => set({ data: d }),
}));

export default useProductsStore;
