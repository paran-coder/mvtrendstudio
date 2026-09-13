"use client";

import { useEffect, useMemo, useRef } from "react";
import { axisLabels, techniques, type SceneEvidence } from "@/data/report";

function labelForTechnique(id: string) {
  const technique = techniques.find((item) => item.id === id);
  if (!technique) return { axis: "근거", name: id };
  return { axis: axisLabels[technique.axis], name: technique.name };
}

export function EvidenceDrawer({
  open,
  onClose,
  evidence,
  title = "장면 근거",
}: {
  open: boolean;
  onClose: () => void;
  evidence: SceneEvidence[];
  title?: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const grouped = useMemo(() => {
    return evidence.reduce<Record<string, SceneEvidence[]>>((acc, item) => {
      (acc[item.techniqueId] ??= []).push(item);
      return acc;
    }, {});
  }, [evidence]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 20);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" aria-labelledby="evidence-drawer-title" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="장면 근거 닫기"
        tabIndex={-1}
        className="absolute inset-0 bg-black/72 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <section className="absolute inset-x-0 bottom-0 flex max-h-[88dvh] flex-col overflow-hidden rounded-t-[28px] border border-white/10 bg-[#0c0c0f] shadow-[0_-30px_100px_rgba(0,0,0,.6)] lg:inset-y-0 lg:left-auto lg:right-0 lg:max-h-none lg:w-[min(620px,48vw)] lg:rounded-none lg:rounded-l-[28px] lg:border-y-0 lg:border-r-0 lg:shadow-[-30px_0_100px_rgba(0,0,0,.55)]">
        <div className="flex items-start justify-between gap-5 border-b border-white/8 px-5 py-5 sm:px-7 sm:py-6">
          <div>
            <div className="kicker">SCENE EVIDENCE</div>
            <h2 id="evidence-drawer-title" className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              원본 리포트의 Recipe 01–03에 명시된 대표 장면과 타임코드입니다. 전체 분석 장면 목록이 아니라, 현재 PDF에서 직접 확인 가능한 근거만 표시합니다.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-lg text-zinc-400 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <span aria-hidden="true">×</span>
            <span className="sr-only">닫기</span>
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-5 py-5 sm:px-7 sm:py-6">
          {evidence.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/10 p-6 text-sm leading-6 text-zinc-500">
              현재 PDF에는 이 항목과 직접 연결된 대표 타임코드가 별도로 표기되어 있지 않습니다. 집계 수치와 설명은 결과 화면에서 계속 확인할 수 있습니다.
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(grouped).map(([techniqueId, items]) => {
                const label = labelForTechnique(techniqueId);
                return (
                  <section key={techniqueId}>
                    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/8 pb-3">
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.14em] text-amber-200/75">{label.axis.toUpperCase()}</div>
                        <h3 className="mt-1 text-base font-semibold text-zinc-100">{label.name}</h3>
                      </div>
                      <div className="text-[11px] text-zinc-600">대표 장면 {items.length}개</div>
                    </div>

                    <div className="mt-3 space-y-3">
                      {items.map((item, index) => (
                        <article key={item.id} className="group rounded-2xl border border-white/8 bg-white/[0.018] p-4 transition hover:border-white/14 hover:bg-white/[0.03] sm:p-5">
                          <div className="grid gap-4 sm:grid-cols-[84px_minmax(0,1fr)]">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/8 bg-[#121218]">
                              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(240,213,140,.08),transparent_40%),linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:auto,16px_16px,16px_16px]" />
                              <div className="absolute inset-x-2 bottom-2 flex items-center justify-between text-[9px] font-semibold tracking-[0.08em] text-zinc-500">
                                <span>FRAME {String(index + 1).padStart(2, "0")}</span>
                                <span className="text-amber-100/80">{item.timecode}</span>
                              </div>
                            </div>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                                <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.055] px-2.5 py-1 text-emerald-200/90">{item.sourceKind}</span>
                                <span className="text-zinc-700">리포트 p.{item.sourcePage}</span>
                              </div>
                              <div className="mt-3 text-sm font-medium text-zinc-200">{item.artist}</div>
                              <div className="mt-1 truncate text-base font-semibold text-white" title={item.title}>{item.title}</div>
                              <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                                <span>{item.section}</span>
                                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                                <span className="font-semibold tabular-nums text-amber-100">{item.timecode}</span>
                              </div>
                              {item.note && <p className="mt-3 text-xs leading-5 text-zinc-600">{item.note}</p>}
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>

        <div className="border-t border-white/8 bg-black/20 px-5 py-4 sm:px-7">
          <p className="text-[11px] leading-5 text-zinc-600">
            장면 이미지는 원본 영상 프레임을 복제하지 않고 자리만 표시했습니다. 공개 배포 전에는 썸네일/프레임 사용 권한과 출처 정책을 별도로 확정하는 것을 권장합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
