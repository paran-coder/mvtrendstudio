import type { Technique } from "@/data/report";

export type ScoreBreakdown = {
  trend: number;
  evidence: number;
  saturation: number;
  coherence: number;
  total: number;
  grade: "SAFE" | "TRENDING" | "EXPERIMENTAL";
  reason: string;
};

function avg(items: number[]) {
  if (!items.length) return 0;
  return items.reduce((sum, value) => sum + value, 0) / items.length;
}

function trendPoints(item: Technique) {
  if (typeof item.delta === "number") {
    const normalized = Math.max(-25, Math.min(25, item.delta));
    return Math.max(4, Math.min(35, 18 + normalized * 0.68));
  }

  const fallback: Record<Technique["signal"], number> = {
    급상승: 33,
    "확장 가능": 28,
    주류: 23,
    포화: 16,
    하락: 9,
    실험적: 24,
  };

  return fallback[item.signal];
}

export function evaluateRecipe(selected: Technique[]): ScoreBreakdown {
  if (!selected.length) {
    return {
      trend: 0,
      evidence: 0,
      saturation: 0,
      coherence: 0,
      total: 0,
      grade: "EXPERIMENTAL",
      reason: "기법을 선택하면 실시간으로 평가가 시작됩니다.",
    };
  }

  const trend = Math.round(avg(selected.map(trendPoints)));
  const evidence = Math.round(avg(selected.map((item) => item.evidence)));
  const saturation = Math.round(avg(selected.map((item) => item.saturationRisk)));
  const coherence = Math.round(avg(selected.map((item) => item.coherence)));
  const total = Math.max(0, Math.min(100, trend + evidence + saturation + coherence));

  const novelty = avg(selected.map((item) => item.novelty));
  const saturatedCount = selected.filter((item) => item.signal === "포화" || item.signal === "하락").length;
  const experimentalCount = selected.filter((item) => item.signal === "실험적").length;
  const highNoveltyCount = selected.filter((item) => item.novelty >= 19).length;

  let grade: ScoreBreakdown["grade"] = "TRENDING";
  let reason = "상승 신호와 제작 근거가 균형을 이루는 조합입니다.";

  if (total >= 78 && novelty < 16 && saturatedCount <= 1) {
    grade = "SAFE";
    reason = "검증 근거가 충분하고 조합 위험이 낮아 안정적인 제작 방향입니다.";
  } else if (experimentalCount >= 2 || highNoveltyCount >= 3 || (novelty >= 19 && evidence < 19) || evidence < 17) {
    grade = "EXPERIMENTAL";
    reason = "차별화 가능성이 높지만 표본 또는 조합 검증이 상대적으로 적습니다.";
  }

  if (saturatedCount >= 2) {
    grade = "EXPERIMENTAL";
    reason = "익숙하거나 하락 중인 기법이 겹쳐 차별화 장치가 추가로 필요합니다.";
  }

  return { trend, evidence, saturation, coherence, total, grade, reason };
}

export function gradeLabel(grade: ScoreBreakdown["grade"]) {
  return {
    SAFE: "안전한 조합",
    TRENDING: "지금 뜨는 조합",
    EXPERIMENTAL: "차별화 조합",
  }[grade];
}
