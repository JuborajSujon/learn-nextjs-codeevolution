import React from "react";

export default function ProductDetails({ params }) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Product Details Page {params.productId}
      </h1>
    </div>
  );
}
