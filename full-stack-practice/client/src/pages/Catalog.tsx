import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { Product } from "../types";
export function Catalog() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error(`fetch Error ${res.status}`);
        const productsList = (await res.json()) as Product[];
        setProducts(productsList);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("productsList", products);
  return (
    <div className="container mx-auto p-4 bg-[#fdfdff]">
      <div className="text-xl border-b-1 border-gray-200">Catalog</div>
      <div className="container flex flex-wrap justify-center sm:justify-start p-2 ">
        {products.map((p) => (
          <Card product={p} />
        ))}
      </div>
    </div>
  );
}
