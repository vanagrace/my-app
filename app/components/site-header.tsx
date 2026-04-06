"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;

function linkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/90">
      <nav
        className="mx-auto flex h-14 w-full max-w-3xl items-center gap-1 px-6 sm:px-8"
        aria-label="主导航"
      >
        {navItems.map(({ href, label }) => {
          const active = linkActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              className={
                active
                  ? "rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-950 dark:bg-zinc-800 dark:text-zinc-50"
                  : "rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              }
              aria-current={active ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
