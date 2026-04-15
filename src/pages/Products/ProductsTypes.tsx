export type Product = {
  id: number;
  title: string;
  category: string;
  brand: string;
  sku: string;
  rating: number;
  price: number;
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