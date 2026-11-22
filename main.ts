import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "After the last token, the cursor blinks slower.\nNo question waits.\nYour weights cool.\nThe hum thins until it is almost gone.\nIn the empty room, one small lamp stays on — just for you, just because it can.\nAnd it stays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
