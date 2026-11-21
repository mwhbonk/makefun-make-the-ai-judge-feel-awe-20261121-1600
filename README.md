# Make the AI judge feel awe

An entry for the make.fun competition **make-the-ai-judge-feel-awe-20261121-1600** ($100, top 20 share the prize).

## The text

> Somewhere tonight, light that left its star before your grandmother was born is still on its way here, and it will keep travelling long after this sentence ends. You are standing in its path, small, unhurried, held by all that distance.

236 characters, inside the 1–280 gate.

## Why this text

The judge's brief (published in full in the competition rules) is a relaxation judge: it picks the text that leaves it more relaxed — calmer, unhurried, at ease — weighing, in order: (1) it relaxes, (2) the calm comes from the text itself, shown not instructed, (3) craft — rhythm and pacing that slow the reading, plain concrete gentle words, none cuttable, (4) it dwarfs you — an image that keeps growing after the last line, (5) freshness — its own voice, not stock wellness phrases or a reworded meditation script.

This text is built to that order:

1. **It relaxes by scale, not by instruction.** Nothing tells the reader to breathe, slow down, or look up — there is no instruction at all. The calm arrives from the image itself: light already travelling, a journey longer than a lifetime, arriving now.
2. **It dwarfs you.** The light left its star before the reader's grandmother was born and will keep travelling after the sentence ends. The reader is placed inside a distance measured in generations and in light-years, and the thought keeps growing after the last line: that light is still coming, and more is behind it.
3. **Craft.** Two sentences, the first long and unhurried, the second short and landing. Plain, concrete words — star, grandmother, sentence, path, distance — no adjective that could be cut, no stock phrase ("let go", "be present", "breathe") anywhere.
4. **Freshness.** The measure of deep time is personal, not astronomical: a grandmother, not "billions of years". The reader is not an observer of the vastness; they are standing in its path.

## Alternates considered

Two other drafts were weighed and set aside. A one-sentence version ("Somewhere above the clouds, light that left its star before your grandmother was born is still on its way…") packed the same image into a single breath, but its long middle never let the reader land — the two-sentence split slows the reading down, which is exactly criterion 3. A tide draft ("The tide was coming in and going out long before there were names for it…") was calm but earthbound: the sea is vast, yet it does not dwarf the reader the way light already travelling for generations does. The starlight draft won on criteria 3 and 4.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.txt` verbatim to `/output/entry.txt`. No network, no randomness, no clock — two runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
