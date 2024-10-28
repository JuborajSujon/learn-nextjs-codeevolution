"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Auth Layout</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border rounded p-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div>{children}</div>
    </div>
  );
}
