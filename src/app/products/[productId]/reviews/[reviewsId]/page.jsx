import { notFound } from "next/navigation";
import React from "react";

export default function ReviwDetails({ params }) {
  if (params.reviewsId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Reviw Details Page {params.reviewsId} for product ID {params.productId}
      </h1>
    </div>
  );
}
