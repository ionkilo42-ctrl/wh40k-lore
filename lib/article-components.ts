export const articleImports = {
  "cosmology/materium-immaterium": () => import("@/content/mdx/cosmology/materium-immaterium.mdx"),
  "cosmology/the-warp": () => import("@/content/mdx/cosmology/the-warp.mdx"),
  "cosmology/psychic-energy": () => import("@/content/mdx/cosmology/psychic-energy.mdx"),
  "imperium/golden-throne": () => import("@/content/mdx/imperium/golden-throne.mdx"),
  "imperium/horus-heresy": () => import("@/content/mdx/imperium/horus-heresy.mdx"),
  "imperium/indomitus-era": () => import("@/content/mdx/imperium/indomitus-era.mdx"),
  "primarchs/roboute-guilliman": () => import("@/content/mdx/primarchs/roboute-guilliman.mdx"),
  "primarchs/horus-lupercal": () => import("@/content/mdx/primarchs/horus-lupercal.mdx"),
  "chaos/ruinous-powers": () => import("@/content/mdx/chaos/ruinous-powers.mdx"),
  "xenos/necrons": () => import("@/content/mdx/xenos/necrons.mdx"),
} as const;

export type ArticleKey = keyof typeof articleImports;

export function hasArticleComponent(key: string): key is ArticleKey {
  return key in articleImports;
}
