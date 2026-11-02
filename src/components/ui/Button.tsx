import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-foreground",
  outline: "border border-line text-foreground hover:border-foreground",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
