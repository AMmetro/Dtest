export type Product = {
  id: number;
  title: string;
  vendor: string;
  name: string;
  brand: string;
  category: string;
  sku: string;
  rating: number;
  price: number;
  stock: number;
};

export type Data = {
  limit: string;
  products: Product[];
  skip: string;
  total: number;
};

 export interface PageHeaderProps {
  onSearch: (searchTerm: string) => void;
  delay?: number;
}