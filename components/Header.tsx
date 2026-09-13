import Link from "next/link";

const nav = [
  { href: "/trends", label: "트렌드" },
  { href: "/recipes/build", label: "레시피 빌더" },
  { href: "/directors", label: "감독 DNA" },
  { href: "/methodology", label: "분석 방법" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#09090b]/88 backdrop-blur-xl supports-[backdrop-filter]:bg-[#09090b]/72">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="MV Trend Studio 홈">
          <span className="grid size-8 place-items-center rounded-lg border border-amber-300/25 bg-amber-300/7 text-[11px] font-black tracking-[-0.08em] text-amber-200 transition group-hover:border-amber-300/45">
            MV
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white">MV TREND STUDIO</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주요 탐색">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white ${
                item.href === "/recipes/build" ? "text-amber-200" : "text-zinc-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/recipes/build"
          className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-semibold text-amber-100 transition hover:bg-amber-300/15 md:hidden"
        >
          만들기
        </Link>
      </div>
    </header>
  );
}
