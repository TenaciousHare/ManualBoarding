// shuffleArray.test.js
import { test, expect } from "vitest";
import { shuffleArray } from "../shuffleArray";

// Testuje, czy funkcja shuffleArray zwraca tablicę o tej samej długości co oryginalna
test("shuffleArray returns an array of the same length as the original", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original);
  expect(shuffled.length).toBe(original.length);
});

// Testuje, czy funkcja shuffleArray zwraca tablicę zawierającą te same elementy co oryginalna
test("shuffleArray returns an array containing the same elements as the original", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original);
  expect(shuffled).toEqual(expect.arrayContaining(original));
});

// Testuje, czy funkcja shuffleArray zwraca tablicę w innej kolejności niż oryginalna (z pewnym prawdopodobieństwem)
test("shuffleArray returns an array in a different order than the original (with some probability)", () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original);
  // Sprawdza, czy tablice są różne, porównując je jako ciągi znaków
  expect(shuffled.join()).not.toBe(original.join());
});
