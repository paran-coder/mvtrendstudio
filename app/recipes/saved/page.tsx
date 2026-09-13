import { Footer } from "@/components/Footer";
import SavedRecipesClient from "@/components/SavedRecipesClient";

export const metadata = { title: "저장된 레시피" };

export default function SavedRecipesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1480px] px-5 pb-8 pt-10 lg:px-8 lg:pt-14">
        <div className="flex flex-col gap-4 border-b border-white/8 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="kicker">SAVED RECIPES</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">저장된 제작 조합</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">이 브라우저에 저장한 레시피를 다시 열 수 있습니다. 서버 계정 없이 LocalStorage에만 보관됩니다.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1480px] px-5 lg:px-8">
        <SavedRecipesClient />
      </section>
      <Footer />
    </main>
  );
}
