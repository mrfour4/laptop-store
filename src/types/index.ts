export type Brand = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  type: string;
};

export type Seller = {
  id: number;
  email: string;
  phoneNumber: string;
  name: string;
  avatar: string | null;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  stockQuantity: number;
  status: string;
  seller: Seller;
  brand: Brand;
  category: Category;
  ratings: [];
};
