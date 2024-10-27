import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  return <h2>Product Details {params.productId}</h2>;
};

export default ProductDetails;
