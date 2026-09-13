"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ScorePanel } from "@/components/ScorePanel";
import { axisLabels, directorCards, techniques, type Axis, type Technique } from "@/data/report";
import { evaluateRecipe, gradeLabel } from "@/lib/scoring";

const axes: Axis[] = ["concept", "color", "camera", "motion", "editing"];

export default function RecipeResultClient() {
  const params = useSearchParams();
  const selected = useMemo(() => {
    return axes
      .map((axis) => techniques.find((item) => item.id === params.get(axis)))
      .filter(Boolean) as Technique[];
  }, [params]);

  const score = useMemo(() => evaluateRecipe(selected), [selected]);
  const fallback = selected.length ? selected : techniques.filter((item) => [
    "neon-y2k-cyber-romance",
    "high-saturation",
    "pan",
    "whip-pan",
    "match-cut",
  ].includes(item.id));
  const effectiveScore = selected.length ? score : evaluateRecipe(fallback);
  const title = fallback.map((item) => item.name).join(" × ");

  const director = fallback.some((item) => item.id === "surreal-industrial-dystopia")
    ? directorCards.find((item) => item.id === "bang-jae-yeob")
    : fallback.some((item) => item.id === "existential-museum")
      ? directorCards.find((item) => item.id === "tanu-muino")
      : directorCards.find((item) => item.id === "bang-jae-yeob");

  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-8 pt-10 lg:px-8 lg:pt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-200/25 bg-amber-200/8 px-3 py-1 text-xs font-semibold text-amber-100">
                {gradeLabel(effectiveScore.grade)}
              </span>
              <span className="text-xs text-zinc-600">MV Trend Studio 제품 평가</span>
            </div>
            <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
              {effectiveScore.reason} 아래 항목은 원본 리포트에서 관측된 신호와 서비스 내부 평가 로직을 분리해 보여줍니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/recipes/build" className="rounded-xl bg-amber-200 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100">레시피 수정</Link>
              <Link href="/methodology" className="rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/5">평가 방식 보기</Link>
            </div>
          </div>
          <ScorePanel score={effectiveScore} />
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8 lg:py-14">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <div className="kicker">PRODUCTION DIRECTION</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">제작 방향</h2>
              <div className="mt-6 space-y-5">
                {fallback.map((item) => (
                  <div key={item.id} className="border-t border-white/7 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold text-amber-100">{axisLabels[item.axis]}</span>
                      <span className="text-[11px] text-zinc-700">리포트 p.{item.sourcePage}</span>
                    </div>
                    <div className="mt-1 font-medium text-zinc-200">{item.name}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
              <div className="kicker">RISK / COUNTERBALANCE</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">리스크와 보정 포인트</h2>
              <div className="mt-6 space-y-4 text-sm leading-6 text-zinc-400">
                <p className="border-l border-rose-300/25 pl-4">Blue Dominant, Locked-off / Static처럼 이미 포화 신호가 강한 문법을 추가할 경우 차별성이 빠르게 낮아질 수 있습니다.</p>
                <p className="border-l border-amber-300/25 pl-4">상승 중인 카메라/편집 기법을 한 축 이상 유지하면 익숙한 콘셉트에서도 현재성을 보완할 수 있습니다.</p>
                <p className="border-l border-white/15 pl-4">Experimental 분류는 “나쁨”이 아니라 표본이 적거나 새로운 조합이라는 뜻입니다. 프리비즈 단계에서 샷 테스트를 권장하는 신호로 사용합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-amber-200/15 bg-gradient-to-br from-amber-200/[0.055] to-transparent p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="kicker">DIRECTOR DNA FIT</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">참고할 감독 문법</h2>
              <div className="mt-6 text-xl font-semibold text-zinc-100">{director?.name}</div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">{director?.formula}</p>
            </div>
            <Link href="/directors" className="text-sm text-amber-100 transition hover:text-amber-50">감독 DNA 전체 보기 →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
