import { Product } from "../types";

type Props = {
  product: Product;
};

export function Card({ product }: Props) {
  return (
    <div className="basis-1/3 lg:basis-1/4 md p-2">
      <div className="border border-gray-200 w-[10rem] h-[10rem] mx-2">
        {product.name}
      </div>
    </div>
  );
}
