import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Product({ productList }) {
  const { id } = useParams();
  const productId = parseInt(id);

  const value = productList.find((product) => product.id === productId);

  return (
    <div className="p-4 ">
      <div>
        <h2 className="text-center">{value.name}</h2>
        <p className="text-center"> {value.title}</p>
      </div>
      <Link
        to={`/products`}
        className=" border border-red-500 rounded-lg px-4 py-2 text-center"
      >
        Back
      </Link>
    </div>
  );
}
