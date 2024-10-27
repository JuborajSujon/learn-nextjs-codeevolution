"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);
  if (random === 0) {
    throw new Error("Something went wrong");
  }
  if (parseInt(params.reviewId) > 1000) return notFound();
  return (
    <h2>
      Review {params.reviewId} for Product {params.productId}
    </h2>
  );
};

export default ReviewDetail;
