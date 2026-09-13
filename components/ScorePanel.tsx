import { gradeLabel, type ScoreBreakdown } from "@/lib/scoring";

function Metric({ label, value, max }: { label: string; value: number; max: number }) {
  const ratio = max ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-zinc-400">{label}</span>
        <span className="tabular-nums text-zinc-200">{value} / {max}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/6">
        <div className="h-full rounded-full bg-amber-200/80 transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${ratio}%` }} />
      </div>
    </div>
  );
}

export function ScorePanel({ score }: { score: ScoreBreakdown }) {
  return (
    <aside className="rounded-2xl border border-white/9 bg-white/[0.025] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.28)]">
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="text-[11px] font-semibold tracking-[0.16em] text-amber-200">LIVE EVALUATION</div>
          <div className="mt-2 text-lg font-semibold text-white">{gradeLabel(score.grade)}</div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-semibold tracking-[-0.04em] text-white tabular-nums">{score.total}</div>
          <div className="mt-1 text-[10px] tracking-[0.14em] text-zinc-500">PRODUCTION FIT / 100</div>
        </div>
      </div>

      <p className="mt-5 border-l border-amber-300/30 pl-3 text-sm leading-6 text-zinc-400">{score.reason}</p>

      <div className="mt-6 space-y-4">
        <Metric label="트렌드 모멘텀" value={score.trend} max={35} />
        <Metric label="근거 강도" value={score.evidence} max={25} />
        <Metric label="포화 리스크" value={score.saturation} max={20} />
        <Metric label="조합 응집도" value={score.coherence} max={20} />
      </div>

      <div className="mt-5 rounded-xl border border-white/7 bg-black/25 p-3 text-xs leading-5 text-zinc-500">
        위 점수는 리포트 원문 수치가 아니라 MV Trend Studio가 제작 의사결정을 위해 산정한 제품 점수입니다.
      </div>
    </aside>
  );
}
