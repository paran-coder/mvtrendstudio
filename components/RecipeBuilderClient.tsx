"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ScorePanel } from "@/components/ScorePanel";
import { SignalBadge } from "@/components/SignalBadge";
import { axisLabels, techniques, type Axis, type Technique } from "@/data/report";
import { evaluateRecipe, gradeLabel } from "@/lib/scoring";

const axes: Axis[] = ["concept", "color", "camera", "motion", "editing"];

const defaultIds: Partial<Record<Axis, string>> = {
  concept: "neon-y2k-cyber-romance",
  color: "high-saturation",
};

function findTechnique(id?: string | null) {
  return techniques.find((item) => item.id === id);
}

export default function RecipeBuilderClient() {
  const searchParams = useSearchParams();
  const seed = findTechnique(searchParams.get("seed"));

  const [activeAxis, setActiveAxis] = useState<Axis>(seed?.axis ?? "camera");
  const [selectedIds, setSelectedIds] = useState<Partial<Record<Axis, string>>>(() => ({
    ...defaultIds,
    ...(seed ? { [seed.axis]: seed.id } : {}),
  }));

  const selected = useMemo(
    () => axes.map((axis) => findTechnique(selectedIds[axis])).filter(Boolean) as Technique[],
    [selectedIds],
  );

  const score = useMemo(() => evaluateRecipe(selected), [selected]);
  const options = techniques.filter((item) => item.axis === activeAxis);
  const activeSelected = findTechnique(selectedIds[activeAxis]);
  const completed = selected.length;

  const resultParams = new URLSearchParams();
  for (const [axis, id] of Object.entries(selectedIds)) {
    if (id) resultParams.set(axis, id);
  }

  function choose(item: Technique) {
    setSelectedIds((current) => ({ ...current, [item.axis]: item.id }));
    const index = axes.indexOf(item.axis);
    const nextAxis = axes[index + 1];
    if (nextAxis && !selectedIds[nextAxis]) setActiveAxis(nextAxis);
  }

  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="kicker">RECIPE BUILDER</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">제작 조합 설계</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
              한 축에 하나의 핵심 기법을 선택합니다. 선택할 때마다 제품 점수와 리스크가 즉시 갱신됩니다.
            </p>
          </div>
          <div className="text-sm text-zinc-500"><span className="text-white tabular-nums">{String(completed).padStart(2, "0")}</span> / 05 선택</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-[250px_minmax(0,1fr)_340px]">
          <aside className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 xl:sticky xl:top-24 xl:h-fit">
            <div className="px-2 pb-3 text-[10px] font-semibold tracking-[0.16em] text-zinc-600">5 PRODUCTION AXES</div>
            <div className="flex gap-2 overflow-x-auto pb-2 xl:block xl:space-y-1 xl:overflow-visible xl:pb-0">
              {axes.map((axis, index) => {
                const item = findTechnique(selectedIds[axis]);
                const active = axis === activeAxis;
                return (
                  <button
                    key={axis}
                    onClick={() => setActiveAxis(axis)}
                    className={`min-w-[135px] rounded-xl border px-3 py-3 text-left transition xl:min-w-0 xl:w-full ${
                      active
                        ? "border-amber-200/25 bg-amber-200/8"
                        : "border-transparent hover:border-white/8 hover:bg-white/[0.025]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] tabular-nums text-zinc-600">0{index + 1}</span>
                      <span className={item ? "text-emerald-300" : "text-zinc-700"}>{item ? "✓" : "·"}</span>
                    </div>
                    <div className={`mt-2 text-sm font-medium ${active ? "text-white" : "text-zinc-400"}`}>{axisLabels[axis]}</div>
                    <div className="mt-1 truncate text-[11px] text-zinc-600">{item?.name ?? "선택 안 함"}</div>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 hidden border-t border-white/8 pt-5 xl:block">
              <div className="text-[10px] font-semibold tracking-[0.16em] text-zinc-600">CURRENT RECIPE</div>
              <div className="mt-3 space-y-2">
                {selected.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveAxis(item.axis)}
                    className="block w-full truncate text-left text-xs text-zinc-400 transition hover:text-white"
                  >
                    <span className="mr-2 text-zinc-700">{axisLabels[item.axis]}</span>{item.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="min-w-0 rounded-2xl border border-white/8 bg-[#0d0d10]/90 p-5 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="kicker">{axisLabels[activeAxis].toUpperCase()}</div>
                <h2 className="mt-3 text-2xl font-semibold text-white">{axisLabels[activeAxis]} 선택</h2>
              </div>
              <div className="text-xs text-zinc-600">트렌드 · 적합도 · 근거를 함께 확인하세요.</div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {options.map((item) => {
                const isSelected = selectedIds[item.axis] === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => choose(item)}
                    className={`group rounded-2xl border p-5 text-left transition ${
                      isSelected
                        ? "border-amber-200/35 bg-amber-200/[0.07] shadow-[inset_0_0_0_1px_rgba(240,213,140,0.04)]"
                        : "border-white/8 bg-white/[0.018] hover:border-white/16 hover:bg-white/[0.035]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-base font-semibold text-white">{item.name}</div>
                        {item.koName && <div className="mt-1 text-xs text-zinc-600">{item.koName}</div>}
                      </div>
                      <SignalBadge signal={item.signal} />
                    </div>
                    <p className="mt-5 min-h-12 text-sm leading-6 text-zinc-500">{item.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/7 pt-4 text-xs tabular-nums">
                      {typeof item.delta === "number" && (
                        <span className={item.delta >= 0 ? "text-emerald-300" : "text-rose-300"}>
                          {item.delta >= 0 ? "+" : ""}{item.delta.toFixed(1)}%p
                        </span>
                      )}
                      {typeof item.currentShare === "number" && <span className="text-zinc-500">현재 {item.currentShare.toFixed(1)}%</span>}
                      {item.currentMvCount && <span className="text-zinc-600">{item.currentMvCount} MV</span>}
                      <span className="ml-auto text-zinc-700">p.{item.sourcePage}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeSelected && (
              <div className="mt-6 rounded-2xl border border-white/8 bg-black/25 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs text-zinc-600">현재 선택</div>
                    <div className="mt-1 font-medium text-zinc-200">{activeSelected.name}</div>
                  </div>
                  <button
                    onClick={() => setSelectedIds((current) => {
                      const next = { ...current };
                      delete next[activeAxis];
                      return next;
                    })}
                    className="w-fit text-xs text-zinc-500 transition hover:text-rose-300"
                  >
                    이 축 비우기
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="hidden xl:block xl:sticky xl:top-24 xl:h-fit">
            <ScorePanel score={score} />
            <Link
              href={`/recipes/result?${resultParams.toString()}`}
              className={`mt-3 block rounded-xl px-4 py-3 text-center text-sm font-bold transition ${
                completed >= 3 ? "bg-amber-200 text-zinc-950 hover:bg-amber-100" : "pointer-events-none bg-white/5 text-zinc-700"
              }`}
              aria-disabled={completed < 3}
            >
              결과 보기 →
            </Link>
            <div className="mt-3 text-center text-[11px] text-zinc-700">최소 3개 축을 선택하면 결과를 볼 수 있습니다.</div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0b0b0d]/94 p-3 backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex max-w-[1480px] items-center gap-4">
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold tracking-[0.12em] text-amber-200">{gradeLabel(score.grade)}</div>
            <div className="mt-0.5 text-xs text-zinc-500">Production Fit <span className="font-semibold text-white tabular-nums">{score.total} / 100</span></div>
          </div>
          <Link
            href={`/recipes/result?${resultParams.toString()}`}
            className={`rounded-lg px-4 py-2.5 text-sm font-bold ${completed >= 3 ? "bg-amber-200 text-zinc-950" : "pointer-events-none bg-white/5 text-zinc-700"}`}
          >
            결과 보기
          </Link>
        </div>
      </div>

      <div className="pb-24 xl:pb-0"><Footer /></div>
    </main>
  );
}
