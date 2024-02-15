import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCountZones } from "./useCountZones";
import { seatMap, plane } from "./useCountZones_MockData";

describe("useCountZones", () => {
  it("should return the correct totals for each zone", async () => {
    // Wyrenderuj hook z danymi testowymi
    const { result } = renderHook(() => useCountZones());
    const [totals] = result.current;

    expect(totals).toEqual({
      zone1: {
        adults: 0,
        children: 0,
        infants: 0,
      },
      zone2: {
        adults: 0,
        children: 0,
        infants: 0,
      },
      zone3: {
        adults: 0,
        children: 0,
        infants: 0,
      },
      zone4: {
        adults: 0,
        children: 0,
        infants: 0,
      },
    });
  });

  it("should count zones correctly when provided with plane and seatMap", async () => {
    // Wyrenderuj hook z danymi testowymi
    const { result } = renderHook(() => useCountZones());
    const [, countZones] = result.current;
    // Wywołaj funkcję countZones z danymi testowymi
    act(() => {
      countZones(plane, seatMap);
    });

    // Sprawdź, czy wartości totals są poprawnie obliczone

    expect(result.current[0]).toEqual({
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
  it("should clear the totals when clear flag is set to true", async () => {
    // Wyrenderuj hook z danymi testowymi
    const { result } = renderHook(() => useCountZones());
    const [, countZones] = result.current;
    // Wywołaj funkcję countZones z flagą clear
    act(() => {
      countZones(plane, seatMap);
    });
    expect(result.current[0]).toEqual({
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
    act(() => {
      countZones(plane, seatMap, true);
    });

    expect(result.current[0]).toEqual({
      zone1: {
        adults: 0,
        children: 0,
        infants: 0,
      },
      zone2: {
        adults: 0,
        children: 0,
        infants: 0,
      },
      zone3: {
        adults: 0,
        children: 0,
        infants: 0,
      },
      zone4: {
        adults: 0,
        children: 0,
        infants: 0,
      },
    });
  });
});
