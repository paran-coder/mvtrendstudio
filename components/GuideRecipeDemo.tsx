"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { axisLabels, techniques, type Axis } from "@/data/report";
import { evaluateRecipe, gradeLabel } from "@/lib/scoring";

const axes: Axis[] = ["concept", "color", "camera", "motion", "editing"];

const samples = [
  {
    id: "safe",
    label: "안전한 조합",
    sourceLabel: "RECIPE 01",
    sourcePage: "p.14–15",
    description: "검증된 Y2K 로맨스 문법에 Slow Motion과 Match Cut을 얹은 안정적인 출발점입니다.",
    ids: ["neon-y2k-cyber-romance", "controlled-saturation", "handheld-tracking", "slow-motion", "match-cut"],
  },
  {
    id: "trending",
    label: "지금 뜨는 조합",
    sourceLabel: "RECIPE 02",
    sourcePage: "p.16–17",
    description: "Pan과 Whip Pan의 상승 모멘텀을 중심으로 현재성을 강하게 가져가는 방향입니다.",
    ids: ["existential-museum", "controlled-saturation", "pan", "whip-pan", "match-cut"],
  },
  {
    id: "experimental",
    label: "차별화 조합",
    sourceLabel: "RECIPE 03",
    sourcePage: "p.18–19",
    description: "Rack Focus, Dolly Push-in, Screen in Screen으로 시그니처 가능성을 높인 실험 방향입니다.",
    ids: ["surreal-industrial-dystopia", "controlled-saturation", "rack-focus", "dolly-push-in", "screen-in-screen"],
  },
] as const;

export function GuideRecipeDemo() {
  const [activeId, setActiveId] = useState<(typeof samples)[number]["id"]>("safe");
  const sample = samples.find((item) => item.id === activeId) ?? samples[0];
  const selected = useMemo(
    () => sample.ids.map((id) => techniques.find((item) => item.id === id)).filter(Boolean) as typeof techniques,
    [sample],
  );
  const score = useMemo(() => evaluateRecipe(selected), [selected]);

  const params = new URLSearchParams();
  selected.forEach((item) => params.set(item.axis, item.id));

  return (
    <div className="overflow-hidden rounded-3xl border border-white/9 bg-[#0d0d10]/92 shadow-[0_32px_110px_rgba(0,0,0,0.26)]">
      <div className="grid border-b border-white/8 lg:grid-cols-[1fr_360px]">
        <div className="p-5 sm:p-6 lg:p-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="샘플 레시피 선택">
            {samples.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  type="button"
                  key={item.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                    active
                      ? "border-amber-200/35 bg-amber-200/[0.09] text-amber-100"
                      : "border-white/9 bg-white/[0.02] text-zinc-500 hover:border-white/16 hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.16em] text-zinc-600">{sample.sourceLabel} · {sample.sourcePage}</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-white">{sample.label}을 직접 열어보세요.</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">{sample.description}</p>
            </div>
            <Link
              href={`/recipes/build?${params.toString()}`}
              className="w-fit shrink-0 rounded-xl bg-amber-200 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100"
            >
              이 조합으로 실습 →
            </Link>
          </div>

          <div className="mt-7 grid gap-2 sm:grid-cols-5">
            {axes.map((axis, index) => {
              const item = selected.find((technique) => technique.axis === axis);
              return (
                <div key={axis} className="rounded-xl border border-white/8 bg-white/[0.018] p-3.5">
                  <div className="flex items-center justify-between gap-3 text-[10px]">
                    <span className="font-semibold text-amber-100/80">0{index + 1}</span>
                    <span className="text-zinc-700">{axisLabels[axis]}</span>
                  </div>
                  <div className="mt-4 min-h-10 text-xs font-medium leading-5 text-zinc-200">{item?.name}</div>
                  <div className="mt-3 text-[10px] text-zinc-600">{item?.signal}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/8 bg-black/25 p-5 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
          <div className="text-[10px] font-semibold tracking-[0.16em] text-amber-200">LIVE PRODUCT EVALUATION</div>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-6xl font-semibold tracking-[-0.065em] text-white tabular-nums">{score.total}</span>
            <span className="pb-1.5 text-xs text-zinc-600">/ 100</span>
          </div>
          <div className="mt-3 text-base font-semibold text-white">{gradeLabel(score.grade)}</div>
          <p className="mt-3 text-sm leading-6 text-zinc-500">{score.reason}</p>
          <div className="mt-6 space-y-3 border-t border-white/8 pt-5 text-xs">
            <div className="flex justify-between"><span className="text-zinc-500">트렌드 모멘텀</span><span className="text-zinc-200">{score.trend} / 35</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">근거 강도</span><span className="text-zinc-200">{score.evidence} / 25</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">포화도 안전성</span><span className="text-zinc-200">{score.saturation} / 20</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">조합 응집도</span><span className="text-zinc-200">{score.coherence} / 20</span></div>
          </div>
          <p className="mt-5 text-[11px] leading-5 text-zinc-700">리포트의 Recipe 분류와 제품 점수는 서로 다른 정보입니다. 위 점수는 선택한 기법을 현재 서비스 로직으로 다시 평가한 값입니다.</p>
        </div>
      </div>
    </div>
  );
}
