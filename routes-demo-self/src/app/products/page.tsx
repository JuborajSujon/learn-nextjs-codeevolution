import Link from "next/link";

export default function Products() {
  const productId = 100;
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Products Lists</h2>
      <ul className="text-lg list-disc">
        <li>
          <Link className="" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="" href="/products/1">
            Product 1
          </Link>
        </li>
        <li>
          <Link className="" href="/products/2">
            Product 2
          </Link>
        </li>
        <li>
          <Link className="" href="/products/3" replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link className="" href={`/products/${productId}`}>
            Product {productId}
          </Link>
        </li>
      </ul>
    </div>
  );
}
