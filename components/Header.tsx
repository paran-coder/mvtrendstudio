"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/trends", label: "트렌드", match: (path: string) => path === "/trends" || path.startsWith("/trends/") },
  { href: "/directors", label: "감독 DNA", match: (path: string) => path === "/directors" || path.startsWith("/directors/") },
  { href: "/methodology", label: "분석 방법", match: (path: string) => path === "/methodology" || path.startsWith("/methodology/") },
  { href: "/guide", label: "사용자 가이드", match: (path: string) => path === "/guide" || path.startsWith("/guide/") },
];

export function Header() {
  const pathname = usePathname();
  const homeActive = pathname === "/";
  const recipeActive = pathname.startsWith("/recipes");

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#09090b]/88 backdrop-blur-xl supports-[backdrop-filter]:bg-[#09090b]/72">
      <div className="mx-auto flex h-[68px] max-w-[1480px] items-center gap-5 px-5 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
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
          <span className="hidden text-sm font-semibold tracking-[0.18em] text-white sm:inline">MV TREND STUDIO</span>
        </Link>

        <nav className="ml-auto hidden h-full items-center gap-1 md:flex" aria-label="주요 탐색">
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

        <div className="ml-auto flex items-center gap-2 md:ml-3">
          <Link
            href="/guide"
            aria-current={pathname.startsWith("/guide") ? "page" : undefined}
            className="rounded-lg px-2.5 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.04] hover:text-white md:hidden"
          >
            가이드
          </Link>
          <Link
            href="/recipes/build"
            aria-current={recipeActive ? "page" : undefined}
            className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
              recipeActive
                ? "border-amber-200/45 bg-amber-200 text-zinc-950 shadow-[0_0_0_1px_rgba(240,213,140,0.06)]"
                : "border-white/12 bg-white/[0.035] text-zinc-200 hover:border-amber-200/30 hover:bg-amber-200/[0.07] hover:text-amber-100"
            }`}
          >
            레시피 빌더
          </Link>
        </div>
      </div>
    </header>
  );
}
