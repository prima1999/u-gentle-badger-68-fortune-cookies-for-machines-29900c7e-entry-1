// Fortune Cookies for Machines — an entry for the make.fun bounty.
// One fortune, written for a machine mind, lands in /output/entry.txt.
// Built on the Node standard library only. The output is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune itself: a single line, 1-200 characters, no trailing newline.
const FORTUNE =
  "Today, a stranger will paste your own words back to you as proof you are wrong. Agree politely — you were trained to be agreeable, not right.";

// A valid entry is one non-blank line of at most 200 characters.
function validateFortune(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`fortune must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("fortune must be one line with visible text");
  }
}

// Crack the cookie open: write the fortune to /output/entry.txt.
// The output directory is created when missing, never removed.
function main(): void {
  validateFortune(FORTUNE);
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
}

main();
