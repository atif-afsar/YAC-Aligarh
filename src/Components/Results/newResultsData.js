function publicUrl(relativePath) {
  const base = import.meta.env.BASE_URL ?? "/";
  const p = relativePath.replace(/^\//, "");
  const b = base.endsWith("/") ? base : `${base}/`;
  const encoded = p.split("/").map(encodeURIComponent).join("/");
  return `${b}${encoded}`;
}

export const NEW_RESULT_CATEGORIES = [
  "ALL",
  "BCOM",
  "BBA",
  "BA",
  "BAFL",
  "BAHONS",
];

export const AMU_ENTRANCE_LABEL = "AMU Entrance 2026";

export const NEW_CATEGORY_LABELS = {
  ALL: "All AMU Entrance",
  BCOM: "B.Com — AMU",
  BBA: "BBA — AMU",
  BA: "BA — AMU",
  BAFL: "BA FL — AMU",
  BAHONS: "BA Hons — AMU",
};

export const NEW_CATEGORY_ORDER = ["BCOM", "BBA", "BA", "BAFL", "BAHONS"];

function sheet(folder, file, category, exam, sheetNo) {
  return {
    id: `${category.toLowerCase()}-${sheetNo}`,
    name: `${NEW_CATEGORY_LABELS[category]} — Sheet ${sheetNo}`,
    category,
    highlight: `Sheet ${sheetNo}`,
    exam,
    year: "2026",
    image: publicUrl(`NewResults/${folder}/${file}`),
  };
}

/** AMU Entrance result sheets from public/NewResults */
export const NEW_RESULTS = [
  sheet("B.COM RESULTS 2026", "1 (1).jpg", "BCOM", "AMU Entrance — B.Com", 1),
  sheet("B.COM RESULTS 2026", "2 (1).jpg", "BCOM", "AMU Entrance — B.Com", 2),
  sheet("B.COM RESULTS 2026", "3 (1).jpg", "BCOM", "AMU Entrance — B.Com", 3),
  sheet("B.COM RESULTS 2026", "4 (1).jpg", "BCOM", "AMU Entrance — B.Com", 4),
  sheet("B.COM RESULTS 2026", "5.jpg", "BCOM", "AMU Entrance — B.Com", 5),

  sheet("BBA RESULTS 2026", "1.jpg", "BBA", "AMU Entrance — BBA", 1),
  sheet("BBA RESULTS 2026", "2.jpg", "BBA", "AMU Entrance — BBA", 2),
  sheet("BBA RESULTS 2026", "3 (1).jpg", "BBA", "AMU Entrance — BBA", 3),
  sheet("BBA RESULTS 2026", "4 (1).jpg", "BBA", "AMU Entrance — BBA", 4),
  sheet("BBA RESULTS 2026", "5 (1).jpg", "BBA", "AMU Entrance — BBA", 5),

  sheet("BA RESULT 2026", "1 (1).jpg", "BA", "AMU Entrance — BA", 1),
  sheet("BA RESULT 2026", "2 (1).jpg", "BA", "AMU Entrance — BA", 2),
  sheet("BA RESULT 2026", "3.jpg", "BA", "AMU Entrance — BA", 3),
  sheet("BA RESULT 2026", "4.jpg", "BA", "AMU Entrance — BA", 4),
  sheet("BA RESULT 2026", "5.jpg", "BA", "AMU Entrance — BA", 5),

  sheet("BA FL RESULTS 2026", "1.jpg", "BAFL", "AMU Entrance — BA FL", 1),
  sheet("BA FL RESULTS 2026", "2.jpg", "BAFL", "AMU Entrance — BA FL", 2),

  {
    id: "bahons-1",
    name: "BA Hons — AMU Entrance — Sheet 1",
    category: "BAHONS",
    highlight: "Sheet 1",
    exam: "AMU Entrance — BA Honours",
    year: "2026",
    image: publicUrl("NewResults/BA HONS. RESULT 2026.jpg.jpg"),
  },
  {
    id: "bahons-2",
    name: "BA Hons — AMU Entrance — Sheet 2",
    category: "BAHONS",
    highlight: "Sheet 2",
    exam: "AMU Entrance — BA Honours",
    year: "2026",
    image: publicUrl("NewResults/BA HONS. RESULT 2026.jpg.jpeg"),
  },
];
