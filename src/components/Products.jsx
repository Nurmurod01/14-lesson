import React from "react";
import { Link } from "react-router-dom";

export default function Products({ productList }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Our Products</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id} className="flex flex">
            <Link to={`/product/${product.id}`} className="border border-red-500 rounded-lg px-4 py-2 hover:bg-red-500">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
