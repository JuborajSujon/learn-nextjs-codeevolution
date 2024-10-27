import { notFound } from "next/navigation";

const ReviewDetail = async ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) return notFound();
  return (
    <h2>
      Review {params.reviewId} for Product {params.productId}
    </h2>
  );
};

export default ReviewDetail;
