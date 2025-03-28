import { Product } from "../types";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export function Card({ product }: Props) {
  const { name, price, imageUrl, shortDescription } = product;

  function displayPrice(price: number): string {
    const result = price.toString();
    return `$${result.slice(0, -2)}.${result.slice(-3, -1)}`;
  }

  return (
    <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 p-1">
      <Link
        to={`product/${product.productId}`}
        className="block border border-gray-200 h-[24rem] mx-1"
      >
        {/* Image Container */}
        <div className="w-full flex items-center h-[12rem]">
          <img
            className="h-full max-w-full object-contain"
            src={imageUrl}
          ></img>
        </div>
        {/* Content */}
        <div className="h-[12rem]">
          <div>{name}</div>
          <div>{displayPrice(price)}</div>
          <div className="">{shortDescription}</div>
        </div>
      </Link>
    </div>
  );
}
