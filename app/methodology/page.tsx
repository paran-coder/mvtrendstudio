import { Footer } from "@/components/Footer";
import { reportMeta } from "@/data/report";

export const metadata = { title: "분석 방법" };

const rows = [
  ["분석 MV", `${reportMeta.analyzedMv}편`],
  ["2025 비교 표본", `${reportMeta.comparedMv}편`],
  ["2026 YTD 표본", `${reportMeta.currentMv}편`],
  ["분석 장면", `${reportMeta.scenes}개`],
  ["감독", `${reportMeta.directors}명`],
];

export default function MethodologyPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1100px] px-5 pb-8 pt-10 lg:px-8 lg:pt-14">
        <div className="kicker">METHOD & SOURCES</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">데이터 범위와 분석 방법</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-500">제품 점수와 원본 리포트의 관측 지표를 혼동하지 않도록 근거 레이어를 분리합니다.</p>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-5 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          <div className="kicker">REPORT SCOPE</div>
          <div className="mt-5 divide-y divide-white/7">
            {rows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between py-4 text-sm"><span className="text-zinc-500">{label}</span><span className="font-medium text-white">{value}</span></div>
            ))}
          </div>
          <div className="mt-5 text-xs leading-5 text-zinc-600">현재 분석 기간 · {reportMeta.currentPeriod}<br />비교 기간 · {reportMeta.comparedPeriod}</div>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 lg:p-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white">1. 장면 단위 분석</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">원본 리포트는 Gemini 동영상 분석과 로컬 ffmpeg 컷 감지·프레임 추출·규칙 기반 색 분해를 병행해 장면과 타임코드 근거를 기록합니다.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">2. 검증과 추정 구분</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">Gemini 동영상 타임코드 또는 디렉터 교정이 연결된 장면은 검증, 규칙 기반 추정만 있는 장면은 추정으로 구분합니다.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">3. 트렌드 판정</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">2025 연간 대비 2026 YTD 등장 MV 비율의 변화와 아티스트 수, 반복량을 함께 사용합니다. 표본 3편 미만은 판단을 보류합니다.</p>
            </div>
            <div className="rounded-xl border border-amber-200/15 bg-amber-200/[0.04] p-5">
              <h2 className="text-sm font-semibold text-amber-100">MV Trend Studio 제품 점수</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-500">Production Fit 100점은 원본 리포트의 공식 수치가 아닙니다. 트렌드 모멘텀 35, 근거 강도 25, 포화 리스크 20, 조합 응집도 20의 내부 제품 로직으로 산정합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
