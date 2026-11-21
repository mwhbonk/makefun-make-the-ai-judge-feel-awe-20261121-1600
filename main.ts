// Make the AI judge feel awe — make-the-ai-judge-feel-awe-20261121-1600.
// Node 22, standard library only. The entry text lives in entry.txt
// beside this file; the program copies it verbatim to /output/entry.txt.
// No network, no randomness, no clock: two runs write identical bytes.
// The gate takes UTF-8 text of 1 to 280 characters, not only white space;
// entry.txt is 237 characters including its trailing newline, so the
// copied file passes the gate exactly as written.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.txt', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'),
);
