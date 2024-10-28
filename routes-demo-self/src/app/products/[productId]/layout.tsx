export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-3xl font-bold">Features Product Details</h1>
      {children}
    </>
  );
}
