export default async function ReviewDetails({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  const { reviewId, productId } = await params;
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Product Details</h2>
      <p className="text-lg">
        Product ID: <span className="text-violet-500">{productId}</span>
      </p>
      <p className="text-lg">
        Review ID: <span className="text-violet-500">{reviewId}</span>
      </p>
    </div>
  );
}
