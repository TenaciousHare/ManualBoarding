import { expect, test } from "vitest";
import { generateSeqNumbersArray } from "../generateSeqNumbersArray";

test("generateSeqNumbersArray returns a valid array", () => {
  const seqArray = generateSeqNumbersArray(33);

  expect(seqArray.length).toBe(33);
  expect(seqArray[0]).toBe(1);
  expect(seqArray[seqArray.length - 1]).toBe(33);
});
