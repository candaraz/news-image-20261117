// Entry for news-image-20261117: "Sum up 17 November's world news in one image".
//
// The image itself is a fixed, pre-rendered PNG (entry.png, committed next
// to this file). This program's only job is to place an exact copy of it at
// the output location the competition reads: /output/entry.png inside the
// sandbox, or $MAKEFUN_OUTPUT_DIR/entry.png when run outside it.
//
// Node 22, standard library only, no network, fully deterministic: the
// output is always byte-identical to the committed PNG.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));

// Fail loudly if the copy landed short: a truncated write must never
// silently submit a corrupt image, so the destination size must match
// the committed PNG exactly before the program exits successfully.
const srcBytes = statSync(join(here, "entry.png")).size;
const dstBytes = statSync(join(outDir, "entry.png")).size;
if (srcBytes !== dstBytes) {
  throw new Error(`entry.png copy incomplete: ${dstBytes} of ${srcBytes} bytes`);
}
