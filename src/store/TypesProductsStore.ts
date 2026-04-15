import { Data } from '../pages/Products/ProductsTypes';

export type ProductsState = {
  data: Data;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  setData: (d: Data) => void;
};