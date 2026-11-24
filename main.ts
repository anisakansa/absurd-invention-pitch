// One-Sentence Absurd Invention Pitch
// Entry: a shower that refuses to get hot until you compliment it.
// Why this pitch: the laugh comes from the invention itself — a shower
// with an ego — and the fix is weirdly plausible: the cold morning is
// cured not by better plumbing but by flattery, and the negotiation
// framing makes the annoyance itself the joke. One clean sentence:
// the annoyance (freezing mornings), the invention (a shower that
// demands compliments), and its silly mechanism (a hostage negotiation
// with your own plumbing). No example from the bounty brief is reused:
// not an apologising alarm, not a complaining sock, not a sighing kettle.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A shower that refuses to get hot until you say something nice to it, turning every freezing morning into a hostage negotiation with your own plumbing.";

if (PITCH.length < 1 || PITCH.length > 220) {
  throw new Error(`pitch must be 1-220 characters, got ${PITCH.length}`);
}
if (PITCH.trim() !== PITCH || PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace or padded");
}
// One sentence: exactly one terminal full stop, at the very end.
if ((PITCH.match(/\./g) ?? []).length !== 1 || !PITCH.endsWith(".")) {
  throw new Error("pitch must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
