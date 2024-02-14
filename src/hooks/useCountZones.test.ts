import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCountZones } from "./useCountZones";
import { Plane } from "../constants";
import { SeatValue } from "./useSeatMap";

// Przykładowy obiekt plane
const plane: Plane = {
  name: "test",
  type: "test",
  seq: 189,
  rows: [1, 2, 3],
  evacuationRow: ["16", "17"],
  evacuationRowColored: ["16", "17"],
  notExistingSeats: ["13"],
  notExisitingRows: 13,
  totalRows: ["test"],
  totalLabels: [{ zone: "2" }],
  zones: {
    zone1Start: 1,
    zone1End: 10,
    zone2Start: 11,
    zone2End: 20,
    zone3Start: 21,
    zone3End: 30,
  },
  maxPaxPerZone: {
    zone1: 30,
    zone2: 120,
    zone3: 30,
  },
};

// Przykładowa tablica seatMap
const seatMap: SeatValue[] = [
  {
    seat: "1A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "1B",
    value: "C",
    paxType: "C",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "1C",
    value: "I",
    paxType: "I",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "2A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "2B",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "2C",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "11A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "11B",
    value: "C",
    paxType: "C",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "11C",
    value: "I",
    paxType: "I",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "12A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "12B",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "12C",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "21A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "21B",
    value: "C",
    paxType: "C",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "21C",
    value: "I",
    paxType: "I",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "22A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "22B",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "22C",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "31A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "31B",
    value: "C",
    paxType: "C",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "31C",
    value: "I",
    paxType: "I",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "32A",
    value: "A",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "32B",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
  {
    seat: "32C",
    value: "",
    paxType: "A",
    seatType: "window",
    evacuationRow: false,
    evacuationRowColored: false,
  },
];

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
    const [totals, countZones] = result.current;
    // Wywołaj funkcję countZones z danymi testowymi
    act(() => {
      countZones(plane, seatMap);
    });

    // Sprawdź, czy wartości totals są poprawnie obliczone

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
