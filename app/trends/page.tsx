import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SignalBadge } from "@/components/SignalBadge";
import { axisLabels, techniques } from "@/data/report";

export const metadata = { title: "트렌드" };

export default function TrendsPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-8 pt-10 lg:px-8 lg:pt-14">
        <div className="kicker">TREND RADAR</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">트렌드 신호</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">2025 연간 대비 2026 YTD의 등장 MV 비율과 리포트 판정을 한 화면에서 탐색합니다.</p>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.018] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="hidden border-b border-white/8 bg-white/[0.018] px-6 py-3 md:grid md:grid-cols-[1fr_140px_180px_120px] md:items-center">
            <span className="text-[10px] font-semibold tracking-[0.14em] text-zinc-600">SIGNAL</span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-zinc-600">CHANGE</span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-zinc-600">2025 → 2026 YTD</span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-zinc-600">ACTION</span>
          </div>
          {techniques.filter((item) => typeof item.delta === "number").sort((a, b) => (b.delta ?? 0) - (a.delta ?? 0)).map((item, index) => (
            <div key={item.id} className={`grid gap-4 px-5 py-5 transition hover:bg-white/[0.018] md:grid-cols-[1fr_140px_180px_120px] md:items-center lg:px-6 ${index ? "border-t border-white/7" : ""}`}>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-white">{item.name}</span>
                  <SignalBadge signal={item.signal} />
                </div>
                <div className="mt-1 text-xs text-zinc-600">{axisLabels[item.axis]} · 리포트 p.{item.sourcePage}</div>
              </div>
              <div className={`text-sm font-medium tabular-nums ${(item.delta ?? 0) >= 0 ? "text-emerald-300" : "text-rose-300"}`}>
                {(item.delta ?? 0) >= 0 ? "+" : ""}{item.delta?.toFixed(1)}%p
              </div>
              <div className="text-sm tabular-nums text-zinc-500">{item.previousShare?.toFixed(1) ?? "—"}% → <span className="text-zinc-200">{item.currentShare?.toFixed(1) ?? "—"}%</span></div>
              <Link href={`/recipes/build?seed=${item.id}`} className="text-xs text-amber-100 transition hover:text-amber-50">조합에 추가 →</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
