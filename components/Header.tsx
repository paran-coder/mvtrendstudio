"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/trends", label: "트렌드", match: (path: string) => path === "/trends" || path.startsWith("/trends/") },
  { href: "/recipes/build", label: "레시피 빌더", match: (path: string) => path.startsWith("/recipes") },
  { href: "/directors", label: "감독 DNA", match: (path: string) => path === "/directors" || path.startsWith("/directors/") },
  { href: "/methodology", label: "분석 방법", match: (path: string) => path === "/methodology" || path.startsWith("/methodology/") },
];

export function Header() {
  const pathname = usePathname();
  const homeActive = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#09090b]/88 backdrop-blur-xl supports-[backdrop-filter]:bg-[#09090b]/72">
      <div className="mx-auto flex h-[68px] max-w-[1480px] items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="MV Trend Studio 홈"
          aria-current={homeActive ? "page" : undefined}
        >
          <span className={`grid size-8 place-items-center rounded-lg border text-[11px] font-black tracking-[-0.08em] transition ${
            homeActive
              ? "border-amber-300/45 bg-amber-300/10 text-amber-100"
              : "border-amber-300/20 bg-amber-300/5 text-amber-200 group-hover:border-amber-300/40"
          }`}>
            MV
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white">MV TREND STUDIO</span>
        </Link>

        <nav className="hidden h-full items-center gap-1 md:flex" aria-label="주요 탐색">
          {nav.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-full items-center px-3 text-sm transition after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-center after:transition-transform ${
                  active
                    ? "font-semibold text-amber-100 after:scale-x-100 after:bg-amber-200/80"
                    : "text-zinc-400 after:scale-x-0 after:bg-transparent hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/recipes/build"
          aria-current={pathname.startsWith("/recipes") ? "page" : undefined}
          className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-semibold text-amber-100 transition hover:bg-amber-300/15 md:hidden"
        >
          만들기
        </Link>
      </div>
    </header>
  );
}
