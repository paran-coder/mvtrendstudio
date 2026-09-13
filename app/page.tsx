import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SignalBadge } from "@/components/SignalBadge";
import { colorMovement, conceptMomentum, reportMeta, risingNow, watchList } from "@/data/report";

function Delta({ value }: { value?: number }) {
  if (typeof value !== "number") return <span className="text-zinc-500">—</span>;
  const positive = value >= 0;
  return (
    <span className={positive ? "text-emerald-300" : "text-rose-300"}>
      {positive ? "+" : ""}{value.toFixed(1)}%p
    </span>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-6 pt-10 lg:px-8 lg:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium tracking-[0.12em] text-zinc-500">
            <span>현재 분석 기간 · {reportMeta.currentPeriod}</span>
            <span>비교 기간 · {reportMeta.comparedPeriod}</span>
            <span>리포트 생성 · {reportMeta.generatedAt}</span>
          </div>
          <Link href="/methodology" className="text-xs text-zinc-500 transition hover:text-amber-100">분석 근거 보기 →</Link>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-16">
          <div>
            <div className="kicker">CREATIVE INTELLIGENCE CONSOLE</div>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[78px] lg:leading-[0.98]">
              다음 뮤직비디오를<br />무엇으로 만들까요?
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              콘셉트, 컬러, 카메라, 모션, 편집 신호를 조합해 지금 시점에 설득력 있는 제작 방향을 빠르게 설계합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/recipes/build" className="rounded-xl bg-amber-200 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100">
                레시피 만들기 →
              </Link>
              <Link href="/trends" className="rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.06]">
                전체 트렌드 보기
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-amber-200/20 bg-[#111014] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.42)] lg:p-8">
            <div className="absolute -right-12 -top-16 size-48 rounded-full bg-amber-300/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="kicker">CURRENT PRODUCTION SIGNAL</span>
                <span className="rounded-full border border-amber-200/20 bg-amber-200/8 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-amber-100">TRENDING</span>
              </div>
              <div className="mt-10 flex items-end gap-3">
                <span className="text-7xl font-semibold tracking-[-0.07em] text-white tabular-nums">95</span>
                <span className="pb-2 text-sm text-zinc-500">/ 100 · 리포트 추천 방향</span>
              </div>
              <div className="mt-8 border-t border-white/8 pt-6">
                <div className="text-xl font-semibold leading-8 text-white">Neon Y2K Cyber Romance</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">Pan + Whip Pan + Match Cut</div>
              </div>
              <Link href="/recipes/build?seed=pan" className="mt-7 inline-flex text-sm font-medium text-amber-100 transition hover:text-amber-50">
                이 방향에서 시작하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8 lg:py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <div className="kicker">RISING NOW</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">지금 빠르게 움직이는 기법</h2>
            </div>
            <span className="hidden text-xs text-zinc-600 sm:block">2025 → 2026 YTD · MV 등장 비율</span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
            {risingNow.map((item, index) => (
              <div key={item.id} className={`grid gap-4 px-5 py-5 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center lg:px-6 ${index ? "border-t border-white/7" : ""}`}>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium text-white">{item.name}</div>
                    <div className="mt-1 text-xs text-zinc-500">{item.axis === "camera" ? "카메라" : item.axis === "editing" ? "편집" : "컬러"} · 리포트 p.{item.sourcePage}</div>
                  </div>
                  <SignalBadge signal={item.signal} />
                </div>
                <div className="flex items-center gap-3 text-sm tabular-nums">
                  <span className="text-zinc-500">{item.previousShare?.toFixed(1)}%</span>
                  <span className="text-zinc-700">→</span>
                  <span className="text-zinc-200">{item.currentShare?.toFixed(1)}%</span>
                  <Delta value={item.delta} />
                </div>
                <Link href={`/recipes/build?seed=${item.id}`} className="w-fit rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-amber-200/25 hover:bg-amber-200/6 hover:text-amber-100">
                  조합에 추가 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-6 px-5 py-10 lg:grid-cols-2 lg:px-8 lg:py-14">
        <div className="rounded-2xl border border-white/8 bg-white/[0.018] p-6">
          <div className="kicker">CONCEPT MOMENTUM</div>
          <h2 className="mt-3 text-xl font-semibold text-white">콘셉트 모멘텀</h2>
          <div className="mt-6 space-y-1">
            {conceptMomentum.map((item) => (
              <div key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-white/7 py-4 first:border-t-0">
                <div>
                  <div className="text-sm font-medium text-zinc-200">{item.name}</div>
                  <div className="mt-1 text-xs text-zinc-600">{item.previous.toFixed(1)}% → {item.current.toFixed(1)}%</div>
                </div>
                <div className="text-sm font-medium text-emerald-300 tabular-nums">+{item.delta.toFixed(1)}%p</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.018] p-6">
          <div className="kicker">WATCH / AVOID</div>
          <h2 className="mt-3 text-xl font-semibold text-white">익숙함이 강해진 신호</h2>
          <div className="mt-6 space-y-1">
            {watchList.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 border-t border-white/7 py-4 first:border-t-0">
                <div>
                  <div className="text-sm font-medium text-zinc-200">{item.name}</div>
                  <div className="mt-1 text-xs text-zinc-600">{item.description}</div>
                </div>
                <SignalBadge signal={item.signal} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 lg:px-8">
        <div className="rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.035] to-transparent p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="kicker">COLOR MOVEMENT</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">현재 장면에서 많이 관측되는 컬러 계열</h2>
              <p className="mt-2 text-sm text-zinc-500">장면 팔레트를 계열별로 묶어 2026년 분석 MV 등장 비율을 표시합니다.</p>
            </div>
            <Link href="/trends" className="text-sm text-amber-100 transition hover:text-amber-50">컬러 포함 전체 트렌드 →</Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {colorMovement.map((item, index) => (
              <div key={item.name} className="relative overflow-hidden rounded-xl border border-white/8 bg-black/30 p-4">
                <div className={`absolute inset-x-0 bottom-0 h-1 ${index === 0 ? "bg-zinc-300" : index === 1 ? "bg-sky-400" : index === 2 ? "bg-orange-400" : "bg-red-500"}`} aria-hidden="true" />
                <div className="text-sm text-zinc-400">{item.name}</div>
                <div className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white tabular-nums">{item.value.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
