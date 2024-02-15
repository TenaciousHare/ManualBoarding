// hexCode.test.js
import { expect, it } from "vitest";
import { generateHexCode } from "./generateHexCode";

it("generateHexCode returns a valid hex color", () => {
  const hex = generateHexCode();

  expect(hex[0]).toBe("#");

  expect(hex.length).toBe(4);

  const validDigits = "0123456789ABCDEF";
  for (let i = 1; i < hex.length; i++) {
    expect(validDigits.includes(hex[i])).toBe(true);
  }
});
