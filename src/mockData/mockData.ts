import { vi } from "vitest";
import { Plane } from "../constants";
import { Zones } from "../store/countZones/countZones";

const planeMock: Plane = {
  name: "Boeing 737-800",
  type: "boeing-737-800",
  seq: 189,
  rows: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
  ],
  evacuationRow: ["16"],
  evacuationRowColored: ["16"],
  notExistingSeats: ["1A"],
  notExisitingRows: 13,
  zones: [1, 5, 6, 28, 29, 33],
  maxPaxPerZone: [27, 132, 30],
  totalRows: ["rows 1-5", "rows 6-28", "rows 29-33", ""],
  totalLabels: [
    { zone: "ZONE 1" },
    { zone: "ZONE 2" },
    { zone: "ZONE 3" },
    { zone: "TOTAL" },
  ],
};
const totalsMock: Zones = {
  zone1: {
    adults: 2,
    children: 1,
    infants: 0,
  },
  zone2: {
    adults: 3,
    children: 2,
    infants: 1,
  },
  zone3: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  zone4: {
    adults: 6,
    children: 3,
    infants: 1,
  },
};

const zeroTotalsMock = {
  zone1: { adults: 0, children: 0, infants: 0 },
  zone2: { adults: 0, children: 0, infants: 0 },
  zone3: { adults: 0, children: 0, infants: 0 },
  zone4: { adults: 0, children: 0, infants: 0 },
};

export const mockValue = {
  state: {
    plane: planeMock,
    totals: totalsMock,
    code: "#777",
    language: false,
    seatmap: [],
  },
  dispatch: vi.fn(),
};

export const zeroMockValue = {
  state: {
    plane: planeMock,
    totals: zeroTotalsMock,
    code: "#777",
    language: false,
    seatmap: [],
  },
  dispatch: vi.fn(),
  handleSelectedPlane: vi.fn(),
};
