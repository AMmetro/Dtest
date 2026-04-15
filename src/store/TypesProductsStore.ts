import { Data } from '../pages/Products/ProductsTypes';

type SortOrder = "asc" | "desc";

export type ProductsState = {
  data: Data;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  addProduct: (productItem: any) => void;
  setData: (d: Data) => void;
  sortOrder: SortOrder;
  toggleSort: () => void;
};