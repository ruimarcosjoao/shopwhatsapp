import { ProductProps } from "@/utils/data/products";
import { ProductCardProps } from "../card-store";

export function add(products: ProductCardProps[], newProducts: ProductProps) {
  const existingProducts = products.find(({ id }) => newProducts.id === id);
  if (existingProducts) {
    return products.map((product) =>
      existingProducts.id === product.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }

  return [...products, {...newProducts, quantity: 1}]
}
