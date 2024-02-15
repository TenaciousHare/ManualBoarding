// hexCode.test.js
import { expect, test } from "vitest";
import { getSeatType } from "../getSeatType";

test("getSeatType returns a valid seatType", () => {
  expect(getSeatType("A")).toBe("window");
  expect(getSeatType("F")).toBe("window");
  expect(getSeatType("C")).toBe("aisle");
  expect(getSeatType("D")).toBe("aisle");
  expect(getSeatType("B")).toBe("mid");
  expect(getSeatType("E")).toBe("mid");
  expect(getSeatType("G")).toBe("unknown");
});
