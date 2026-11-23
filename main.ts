import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh Sprint — one original line, a light funny take on everyday life.
// The joke: untangling the cable mess breaks everything, because the tangle
// itself was structural. The twist lands on the last word: "load-bearing".
// Output: 97 code points, 99 bytes, no trailing newline.
const LINE =
  "I finally untangled all my cables, and now nothing works — turns out the tangle was load-bearing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
