import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// A boring, specific, almost-believable workplace detail: a dental filling
// moved to 8am, with anaesthetic that wipes out the morning. The humour is
// in the excuse's own logic — "I'll be useless anyway" is the confession
// hiding inside an otherwise perfectly mundane sick note.
const ENTRY =
  "Dentist moved my filling to 8am, anaesthetic lasts four hours, I'll be useless till lunch anyway";

// Guard: the bounty requires exactly one line, 1-140 chars, at most 20 words.
// Fail loudly instead of writing an entry the grader would reject.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.split(/\s+/).length > 20) {
  throw new Error(`entry violates bounty limits: ${ENTRY.length} chars, ${ENTRY.split(/\s+/).length} words`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
