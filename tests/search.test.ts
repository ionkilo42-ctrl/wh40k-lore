import { describe, expect, it } from "vitest";

import { buildSearchDocuments } from "../lib/search-data";

describe("global search corpus", () => {
  it("combines lore articles, factions, and timeline events", () => {
    const documents = buildSearchDocuments();
    const types = new Set(documents.map((document) => document.type));

    expect(types).toEqual(new Set(["Article", "Faction", "Timeline"]));
    expect(documents.some((document) => document.title === "The Golden Throne")).toBe(true);
    expect(documents.some((document) => document.title === "The Great Rift Opens")).toBe(true);
    expect(documents.some((document) => document.title === "Necrons")).toBe(true);
  });

  it("provides valid internal links for every result", () => {
    const documents = buildSearchDocuments();

    expect(documents.every((document) => document.href.startsWith("/"))).toBe(true);
  });
});
