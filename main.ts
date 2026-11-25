// Worst Superpower — make.fun bounty u-suroto-worst-superpower-461dcdbe
//
// Writes one line (100 characters) inventing the most useless superpower:
// the power to predict the future perfectly — but only for events that
// already happened yesterday. A prediction of the past is no prediction
// at all, which is exactly the point: genuinely useless, specific, and
// funny to picture in use (a hero solemnly announcing yesterday's news).
//
// SPDX-License-Identifier: MIT

import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, kept as one literal so the output stays byte-exact:
// edit the wording only if the joke itself changes.
const LINE =
  "I can predict the future with perfect accuracy, but only for events that already happened yesterday.";

// Write the entry line to /output/entry.txt, creating the directory first.
// The file holds the line alone: no trailing newline, so the gate counts
// exactly 100 characters.
function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

writeEntry(LINE);
