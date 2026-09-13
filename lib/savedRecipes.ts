export const SAVED_RECIPES_KEY = "mv-trend-studio:saved-recipes";

export type SavedRecipe = {
  id: string;
  query: string;
  title: string;
  grade: string;
  score: number;
  savedAt: string;
};

export function readSavedRecipes(): SavedRecipe[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SAVED_RECIPES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedRecipe[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeSavedRecipes(items: SavedRecipe[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(items));
}
