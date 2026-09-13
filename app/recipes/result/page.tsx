import { Suspense } from "react";
import RecipeResultClient from "@/components/RecipeResultClient";

export const metadata = { title: "레시피 결과" };

export default function RecipeResultPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1480px] px-5 py-20 text-sm text-zinc-500 lg:px-8">결과를 계산하고 있습니다…</div>}>
      <RecipeResultClient />
    </Suspense>
  );
}
