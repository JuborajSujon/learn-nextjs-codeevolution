function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 0) {
    throw new Error("Error loading products");
  }
  return (
    <>
      {children}
      <h2>Features Products</h2>
      {/* Carousel here*/}
    </>
  );
}
