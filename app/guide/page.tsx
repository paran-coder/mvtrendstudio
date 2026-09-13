import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideRecipeDemo } from "@/components/GuideRecipeDemo";
import { sceneEvidence } from "@/data/report";

export const metadata: Metadata = {
  title: "사용자 가이드",
  description: "MV Trend Studio를 처음 사용하는 제작자를 위한 3분 가이드",
};

const steps = [
  {
    number: "01",
    title: "트렌드를 확인합니다",
    description: "2025 연간과 2026 YTD를 비교해 상승·하락·포화 신호를 먼저 파악합니다.",
    href: "/trends",
    cta: "트렌드 보기",
  },
  {
    number: "02",
    title: "5개 제작 축을 조합합니다",
    description: "콘셉트, 컬러, 카메라, 모션, 편집에서 한 가지씩 선택해 제작 방향을 만듭니다.",
    href: "/recipes/build",
    cta: "레시피 만들기",
  },
  {
    number: "03",
    title: "Production Fit을 읽습니다",
    description: "트렌드 모멘텀·근거 강도·포화도 안전성·조합 응집도를 합산해 현재 조합을 평가합니다.",
    href: "#score",
    cta: "점수 읽는 법",
  },
  {
    number: "04",
    title: "장면 근거를 검증합니다",
    description: "결과 화면의 Evidence에서 실제 MV 구간과 타임코드를 확인해 레퍼런스로 사용합니다.",
    href: "#evidence",
    cta: "Evidence 이해하기",
  },
  {
    number: "05",
    title: "저장하고 팀과 공유합니다",
    description: "브라우저에 레시피를 저장하거나 같은 조합이 담긴 URL을 복사해 제작팀과 공유합니다.",
    href: "#share",
    cta: "저장·공유 보기",
  },
];

const scoreItems = [
  {
    label: "트렌드 모멘텀",
    max: "35",
    question: "지금 움직이는가?",
    description: "전년 대비 등장 비율 변화와 리포트의 상승·확장·포화 신호를 반영합니다.",
  },
  {
    label: "근거 강도",
    max: "25",
    question: "근거가 충분한가?",
    description: "해당 기법에 연결된 리포트 표본과 검증 신호가 얼마나 탄탄한지 평가합니다.",
  },
  {
    label: "포화도 안전성",
    max: "20",
    question: "너무 익숙하지 않은가?",
    description: "이미 과하게 반복되거나 하락 중인 문법일수록 점수가 낮아집니다. 높은 점수일수록 안전합니다.",
  },
  {
    label: "조합 응집도",
    max: "20",
    question: "서로 잘 맞는가?",
    description: "선택한 콘셉트·컬러·카메라·모션·편집이 하나의 제작 방향으로 연결되는지 평가합니다.",
  },
];

const gradeItems = [
  {
    label: "SAFE",
    ko: "안전한 조합",
    description: "검증 근거가 충분하고 조합 위험이 낮은 방향입니다. 빠른 프리프로덕션에 적합합니다.",
  },
  {
    label: "TRENDING",
    ko: "지금 뜨는 조합",
    description: "현재 모멘텀과 제작 근거가 균형을 이루는 방향입니다. 트렌드 선점에 적합합니다.",
  },
  {
    label: "EXPERIMENTAL",
    ko: "차별화 조합",
    description: "새롭거나 표본이 적은 요소가 많아 샷 테스트가 필요한 방향입니다. 우열이 아니라 전략 분류입니다.",
  },
];

export default function GuidePage() {
  const evidence = sceneEvidence.slice(0, 3);

  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-10 pt-10 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end lg:gap-14">
          <div>
            <div className="kicker">3-MINUTE USER GUIDE</div>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px] lg:leading-[1]">
              처음 3분이면<br />충분합니다.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
              MV Trend Studio는 <strong className="font-semibold text-zinc-200">트렌드를 보고 → 제작 조합을 만들고 → 점수를 읽고 → 실제 장면 근거를 확인하는</strong> 도구입니다. 데이터를 보는 데서 끝내지 않고 프리프로덕션 결정으로 연결하는 것이 목적입니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/recipes/build" className="rounded-xl bg-amber-200 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100">
                바로 레시피 만들기 →
              </Link>
              <a href="#demo" className="rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.06]">
                샘플로 먼저 배우기
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/9 bg-white/[0.025] p-6 lg:p-7">
            <div className="text-[10px] font-semibold tracking-[0.16em] text-amber-200">THE BASIC LOOP</div>
            <div className="mt-6 space-y-1">
              {[
                ["01", "트렌드", "무엇이 오르고 내려가는지 확인"],
                ["02", "조합", "5개 제작 축에서 핵심 기법 선택"],
                ["03", "평가", "Production Fit과 전략 등급 확인"],
                ["04", "근거", "타임코드로 실제 장면 검증"],
              ].map(([number, title, description]) => (
                <div key={number} className="grid grid-cols-[32px_76px_1fr] gap-3 border-t border-white/7 py-4 first:border-t-0 first:pt-0">
                  <span className="text-xs tabular-nums text-zinc-700">{number}</span>
                  <span className="text-sm font-semibold text-zinc-200">{title}</span>
                  <span className="text-xs leading-5 text-zinc-600">{description}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-[1480px] px-5 py-10 lg:px-8 lg:py-14">
          <div className="mb-7">
            <div className="kicker">QUICK START</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">이 순서대로 사용하면 됩니다.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {steps.map((step) => (
              <a key={step.number} href={step.href} className="group flex min-h-[230px] flex-col rounded-2xl border border-white/8 bg-white/[0.018] p-5 transition hover:border-amber-200/20 hover:bg-amber-200/[0.025]">
                <div className="text-xs font-semibold tabular-nums text-amber-100/70">{step.number}</div>
                <h3 className="mt-7 text-base font-semibold leading-6 text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{step.description}</p>
                <div className="mt-auto pt-6 text-xs font-medium text-zinc-500 transition group-hover:text-amber-100">{step.cta} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="scroll-mt-24 mx-auto max-w-[1480px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="mb-7 max-w-3xl">
          <div className="kicker">LEARN BY DOING</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">완성된 샘플을 먼저 만져보세요.</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">세 가지 리포트 레시피를 바꿔보며 어떤 축이 조합을 만드는지 확인한 뒤, 그대로 Recipe Builder로 넘겨 수정할 수 있습니다.</p>
        </div>
        <GuideRecipeDemo />
      </section>

      <section id="score" className="scroll-mt-24 border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-[1480px] px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
            <div>
              <div className="kicker">HOW TO READ THE SCORE</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">Production Fit은 무엇인가요?</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                리포트 원문의 95점과 별개로, MV Trend Studio가 사용자의 현재 선택을 비교하기 위해 계산하는 제품 점수입니다. 점수가 높다고 반드시 더 창의적인 것은 아닙니다.
              </p>
              <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-200/[0.035] p-5">
                <div className="text-5xl font-semibold tracking-[-0.06em] text-white tabular-nums">100</div>
                <div className="mt-2 text-[10px] font-semibold tracking-[0.14em] text-zinc-600">MAX PRODUCTION FIT</div>
                <div className="mt-5 text-xs leading-5 text-zinc-500">35 + 25 + 20 + 20의 네 축으로 구성됩니다.</div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {scoreItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 lg:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-amber-100">{item.label}</div>
                      <div className="mt-2 text-lg font-semibold text-white">{item.question}</div>
                    </div>
                    <div className="text-2xl font-semibold text-zinc-300 tabular-nums">/{item.max}</div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-zinc-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {gradeItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/8 bg-[#0d0d10] p-5">
                <div className="text-[10px] font-semibold tracking-[0.16em] text-zinc-600">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-white">{item.ko}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="scroll-mt-24 mx-auto max-w-[1480px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-start lg:gap-14">
          <div>
            <div className="kicker">SCENE EVIDENCE</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">추천을 그대로 믿지 말고 장면까지 확인합니다.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
              결과 화면의 `장면 근거 보기`를 누르면 선택한 기법과 연결된 아티스트, MV 제목, 구간, 타임코드, 리포트 페이지를 확인할 수 있습니다. 현재는 PDF Recipe 01–03에 직접 기재된 대표 장면만 연결합니다.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {evidence.map((item, index) => (
                <div key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.018] p-4">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-amber-100/70">FRAME 0{index + 1}</span>
                    <span className="tabular-nums text-zinc-600">{item.timecode}</span>
                  </div>
                  <div className="mt-5 text-xs text-zinc-500">{item.artist}</div>
                  <div className="mt-1 min-h-10 text-sm font-semibold leading-5 text-zinc-200">{item.title}</div>
                  <div className="mt-4 border-t border-white/7 pt-3 text-[10px] text-zinc-600">{item.section} · 리포트 p.{item.sourcePage}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/9 bg-[#0d0d10] p-6 lg:p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[10px] font-semibold tracking-[0.16em] text-amber-200">EVIDENCE DRAWER</div>
              <span className="rounded-full border border-white/9 px-2.5 py-1 text-[10px] text-zinc-600">대표 근거 표본</span>
            </div>
            <div className="mt-7 border-l border-white/8 pl-5">
              <div className="text-xs text-zinc-600">왜 이 장면인가?</div>
              <div className="mt-2 text-lg font-semibold text-white">기법 → 작품 → 타임코드</div>
              <p className="mt-3 text-sm leading-6 text-zinc-500">제작 회의에서 “이런 느낌”이라고 말하는 대신, 어디에서 어떤 문법이 쓰였는지 구체적으로 공유하기 위한 계층입니다.</p>
            </div>
            <Link href="/recipes/build" className="mt-7 inline-flex text-sm font-semibold text-amber-100 transition hover:text-amber-50">레시피에서 Evidence 확인하기 →</Link>
          </aside>
        </div>
      </section>

      <section id="share" className="scroll-mt-24 border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-[1480px] px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="kicker">SAVE & SHARE</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">결정 과정을 팀에 넘깁니다.</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-500">결과를 보고 끝내지 않고 감독, 기획사, 프로덕션 사이에서 같은 조합을 다시 열 수 있도록 설계했습니다.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 lg:p-6">
              <div className="text-xs font-semibold text-white">레시피 저장</div>
              <p className="mt-3 text-sm leading-6 text-zinc-500">현재 브라우저의 LocalStorage에 최대 12개까지 저장합니다. 계정 동기화는 아직 포함하지 않습니다.</p>
              <Link href="/recipes/saved" className="mt-5 inline-flex text-xs font-medium text-amber-100">저장 목록 보기 →</Link>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5 lg:p-6">
              <div className="text-xs font-semibold text-white">공유 링크 복사</div>
              <p className="mt-3 text-sm leading-6 text-zinc-500">5개 선택값을 URL query에 담습니다. 상대방이 링크를 열면 같은 조합을 그대로 확인하고 수정할 수 있습니다.</p>
              <Link href="/recipes/build" className="mt-5 inline-flex text-xs font-medium text-amber-100">공유할 조합 만들기 →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl border border-amber-200/18 bg-gradient-to-br from-amber-200/[0.07] via-white/[0.018] to-transparent p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="kicker">READY TO BUILD</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">이제 한 조합만 만들어보면 됩니다.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">정답을 찾는 도구가 아니라, 제작 방향을 비교하고 근거를 빠르게 좁히는 도구로 사용하세요.</p>
            </div>
            <Link href="/recipes/build?concept=neon-y2k-cyber-romance&color=controlled-saturation&camera=handheld-tracking&motion=slow-motion&editing=match-cut" className="w-fit rounded-xl bg-amber-200 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100">
              샘플 레시피로 시작 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
