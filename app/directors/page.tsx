import { Footer } from "@/components/Footer";
import { directorCards } from "@/data/report";

export const metadata = { title: "감독 DNA" };

export default function DirectorsPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-8 pt-10 lg:px-8 lg:pt-14">
        <div className="kicker">DIRECTOR SIGNATURE MAP</div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">감독별 비주얼 DNA</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-500">리포트 기준 2편 이상의 MV가 분석된 감독만 반복 기법을 시그니처 또는 패턴으로 표시합니다.</p>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-5 px-5 md:grid-cols-2 lg:px-8">
        {directorCards.map((director) => (
          <article key={director.id} className="group rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:-translate-y-0.5 hover:border-amber-200/18 hover:bg-white/[0.03] hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] motion-reduce:hover:translate-y-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xl font-semibold text-white">{director.name}</div>
                <div className="mt-1 text-xs text-zinc-600">{director.status} · {director.mvCount} MV</div>
              </div>
              <div className="rounded-full border border-amber-200/20 bg-amber-200/6 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-amber-100">DNA</div>
            </div>
            <div className="mt-6 space-y-4 border-t border-white/7 pt-5 text-sm">
              <div><span className="mr-3 text-[10px] font-semibold tracking-[0.12em] text-zinc-600">CONCEPT</span><span className="text-zinc-300">{director.concept}</span></div>
              <div><span className="mr-3 text-[10px] font-semibold tracking-[0.12em] text-zinc-600">CAMERA</span><span className="text-zinc-400">{director.camera}</span></div>
              <div><span className="mr-3 text-[10px] font-semibold tracking-[0.12em] text-zinc-600">COLOR</span><span className="text-zinc-400">{director.color}</span></div>
            </div>
            <div className="mt-6 rounded-xl border border-white/7 bg-black/25 p-4">
              <div className="text-[10px] font-semibold tracking-[0.14em] text-amber-200">SIGNATURE FORMULA</div>
              <div className="mt-2 text-sm leading-6 text-zinc-300">{director.formula}</div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  );
}
