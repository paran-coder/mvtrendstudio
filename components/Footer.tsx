import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/8">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-3 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>MV Trend Studio · v1.0.0-alpha.3</span>
        <Link href="/methodology" className="transition hover:text-zinc-300">데이터 범위와 분석 방법 보기 →</Link>
      </div>
    </footer>
  );
}
