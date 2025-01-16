import { Product } from "@/types";

type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};
