import Link from "next/link";

const ProductList = () => {
  const productId = 100;
  return (
    <div>
      <Link href="/">Home</Link>
      <h2 className="text-2xl text-violet-500">Product List</h2>
      <h3>
        <Link href="/products/1">Prouct 1</Link>
      </h3>
      <h3>
        <Link href="/products/2">Prouct 2</Link>
      </h3>
      <h3>
        <Link href="/products/3" replace>
          Prouct 3
        </Link>
      </h3>
      <h3>
        <Link href={`/products/${productId}`}>Prouct {productId}</Link>
      </h3>
    </div>
  );
};

export default ProductList;
