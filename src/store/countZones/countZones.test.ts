import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { seatMap, plane } from "./countZones_MockData";
import { countZones } from "./countZones";

describe("useCountZones", () => {
  it("should count zones correctly when provided with plane and seatMap", async () => {
    const totals = countZones(plane, seatMap);

    expect(totals).toEqual({
      zone1: {
        adults: 3,
        children: 1,
        infants: 1,
      },
      zone2: {
        adults: 3,
        children: 1,
        infants: 1,
      },
      zone3: {
        adults: 3,
        children: 1,
        infants: 1,
      },
      zone4: {
        adults: 12,
        children: 4,
        infants: 4,
      },
    });
  });
});
