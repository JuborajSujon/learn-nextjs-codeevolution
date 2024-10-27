const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  return <h2>Product Details {params.productId}</h2>;
};

export default ProductDetails;
