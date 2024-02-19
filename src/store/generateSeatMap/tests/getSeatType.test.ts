import { expect, it } from "vitest";
import { getSeatType } from "../helpers/getSeatType";

it("returns a valid seatType", () => {
  expect(getSeatType("A")).toBe("window");
  expect(getSeatType("F")).toBe("window");
  expect(getSeatType("C")).toBe("aisle");
  expect(getSeatType("D")).toBe("aisle");
  expect(getSeatType("B")).toBe("mid");
  expect(getSeatType("E")).toBe("mid");
  expect(getSeatType("G")).toBe("unknown");
});
