import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line a gamer texts the boss to skip work on GTA 6 launch week.
// A boring, specific, almost-believable workplace detail: a dental filling
// moved to 8am, with anaesthetic that wipes out the morning. The humour is
// in the excuse's own logic — "I'll be useless anyway" is the confession
// hiding inside an otherwise perfectly mundane sick note.
const ENTRY =
  "Dentist moved my filling to 8am, anaesthetic lasts four hours, I'll be useless till lunch anyway";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
