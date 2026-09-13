"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readSavedRecipes, writeSavedRecipes, type SavedRecipe } from "@/lib/savedRecipes";

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "저장 날짜 없음";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function SavedRecipesClient() {
  const [items, setItems] = useState<SavedRecipe[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readSavedRecipes());
    setHydrated(true);
  }, []);

  function remove(id: string) {
    const next = items.filter((item) => item.id !== id);
    setItems(next);
    writeSavedRecipes(next);
  }

  if (!hydrated) {
    return <div className="rounded-3xl border border-white/8 bg-white/[0.018] px-6 py-16 text-center text-sm text-zinc-600">저장된 레시피를 불러오는 중입니다…</div>;
  }

  if (!items.length) {
    return (
      <div className="rounded-3xl border border-white/8 bg-white/[0.018] px-6 py-14 text-center lg:px-10 lg:py-20">
        <div className="mx-auto grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.025] text-lg text-zinc-500">+</div>
        <h2 className="mt-5 text-xl font-semibold text-white">저장된 레시피가 없습니다.</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-zinc-500">레시피 결과 화면에서 저장하면 이 브라우저에 보관됩니다. 계정이나 서버 저장소는 아직 사용하지 않습니다.</p>
        <Link href="/recipes/build" className="mt-6 inline-flex rounded-xl bg-amber-200 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-100">첫 레시피 만들기 →</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.id} className="rounded-2xl border border-white/8 bg-white/[0.018] p-6 transition hover:border-white/14 hover:bg-white/[0.025]">
          <div className="flex items-start justify-between gap-5">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.14em] text-amber-200">{item.grade}</div>
              <h2 className="mt-2 line-clamp-2 text-lg font-semibold leading-7 text-white">{item.title}</h2>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-3xl font-semibold tracking-[-0.04em] text-white tabular-nums">{item.score}</div>
              <div className="text-[9px] tracking-[0.12em] text-zinc-600">FIT / 100</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/7 pt-4">
            <span className="text-[11px] text-zinc-600">{formatDate(item.savedAt)}</span>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => remove(item.id)} className="text-xs text-zinc-600 transition hover:text-rose-300">삭제</button>
              <Link href={`/recipes/result?${item.query}`} className="text-xs font-medium text-amber-100 transition hover:text-amber-50">열기 →</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
