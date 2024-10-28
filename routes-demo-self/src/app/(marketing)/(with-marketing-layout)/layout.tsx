export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-3xl font-bold">Inner Marketing Layout</h2>
      {children}
    </>
  );
}
