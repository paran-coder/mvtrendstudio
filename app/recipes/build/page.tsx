import { Suspense } from "react";
import RecipeBuilderClient from "@/components/RecipeBuilderClient";

export const metadata = { title: "레시피 빌더" };

export default function RecipeBuilderPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1480px] px-5 py-20 text-sm text-zinc-500 lg:px-8">레시피 빌더를 준비하고 있습니다…</div>}>
      <RecipeBuilderClient />
    </Suspense>
  );
}
