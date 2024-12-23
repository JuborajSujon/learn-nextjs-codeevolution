import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Codevolution",
    template: "%s | Routes Demo",
    default: "Next.js Tutorial - Codevolution",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-slate-800 text-slate-50 py-3">
          <nav className="flex justify-center items-center gap-2">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-800 text-slate-50 py-2">Footer</footer>
      </body>
    </html>
  );
}
