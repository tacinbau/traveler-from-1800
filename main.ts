// One Sentence for a Traveler from 1800 — a make.fun program/v1 entry.
// It writes the entry sentence to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "It is a road of wire joining every house on earth to one great post house and library, where a letter you send arrives in a blink and any book you seek lies open upon your table.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// exactly one sentence. Fail loudly here rather than shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters, must be 1-200.`);
}
if (ENTRY.trim() !== ENTRY || (ENTRY.match(/\./g) ?? []).length !== 1) {
  throw new Error("Entry must be a single sentence with no surrounding space.");
}

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
} catch {
  // The grader sandbox provides /output; still print the sentence below.
}

console.log(ENTRY);
