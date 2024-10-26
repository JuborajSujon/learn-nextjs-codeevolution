import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <h2>
      Review {params.reviewId} for Product {params.productId}
    </h2>
  );
};

export default ReviewDetail;
