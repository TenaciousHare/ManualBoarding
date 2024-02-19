import { it, expect } from "vitest";
import { shuffleArray } from "../helpers/shuffleArray";

it("returns an array of the same length as the original", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original);
  expect(shuffled.length).toBe(original.length);
});

it("returns an array containing the same elements as the original", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original);
  expect(shuffled).toEqual(expect.arrayContaining(original));
});

it("returns an array in a different order than the original (with some probability)", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original);
  expect(shuffled.join()).not.toBe(original.join());
});
