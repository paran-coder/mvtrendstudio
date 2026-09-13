import type { Signal } from "@/data/report";

const labels: Record<Signal, string> = {
  급상승: "급상승",
  "확장 가능": "확장 가능",
  주류: "현재 주류",
  포화: "포화 주의",
  하락: "하락 신호",
  실험적: "실험적",
};

export function SignalBadge({ signal }: { signal: Signal }) {
  const tone =
    signal === "급상승"
      ? "border-emerald-300/25 bg-emerald-300/8 text-emerald-200"
      : signal === "하락" || signal === "포화"
        ? "border-rose-300/20 bg-rose-300/8 text-rose-200"
        : signal === "실험적"
          ? "border-violet-300/20 bg-violet-300/8 text-violet-200"
          : "border-amber-300/20 bg-amber-300/8 text-amber-100";

  return <span className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${tone}`}>{labels[signal]}</span>;
}
