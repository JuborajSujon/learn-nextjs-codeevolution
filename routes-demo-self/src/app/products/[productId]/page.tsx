// "use client";
// import { useParams } from "next/navigation";
// export default function ProductDetails() {
//   const { productId } = useParams();
//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-bold">Product Details</h2>
//       <p className="text-lg font-bold">
//         Product ID: <span className="text-violet-500">{productId}</span>
//       </p>
//     </div>
//   );
// }
import { Metadata } from "next";
type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return { title: `Product ${title}` };
};

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Product Details</h2>
      <p className="text-lg">Product ID: {productId}</p>
    </div>
  );
}
