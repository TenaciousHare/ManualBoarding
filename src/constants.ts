export interface Plane {
  name: string;
  type: string;
  seq: number;
  rows: number[];
  evacuationRow: string[];
  evacuationRowColored: string[];
  notExistingSeats: string[];
  notExisitingRows: number;
  totalRows: string[];
  totalLabels: { zone: string }[];
  zones: {
    zone1Start: number;
    zone1End: number;
    zone2Start: number;
    zone2End: number;
    zone3Start: number;
    zone3End: number;
  };
  maxPaxPerZone: {
    zone1: number;
    zone2: number;
    zone3: number;
  };
}

export const SEATS: string[] = ["A", "B", "C", "D", "E", "F"];
export const TOTAL_HEADERS: string[] = ["", "", "A", "C", "TTL", "I"];

export const MAX_INF = 18;
export const MAX_CHD = 40;

export const PLANES = [
  {
    name: "Boeing 737-800",
    type: "boeing-737-800",
    seq: 189,
    rows: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    ],
    evacuationRow: [
      "1A",
      "1B",
      "1C",
      "2A",
      "2B",
      "2C",
      "15A",
      "15B",
      "15C",
      "15D",
      "15E",
      "15F",
      "16A",
      "16B",
      "16C",
      "16D",
      "16E",
      "16F",
      "17A",
      "17B",
      "17C",
      "17D",
      "17E",
      "17F",
      "18A",
      "18B",
      "18C",
      "18D",
      "18E",
      "18F",
    ],
    evacuationRowColored: [
      "1A",
      "1B",
      "1C",
      "16A",
      "16B",
      "16C",
      "16D",
      "16E",
      "16F",
      "17A",
      "17B",
      "17C",
      "17D",
      "17E",
      "17F",
    ],
    notExistingSeats: [
      "1D",
      "1E",
      "1F",
      "13A",
      "13B",
      "13C",
      "13D",
      "13E",
      "13F",
    ],
    notExisitingRows: 13,
    totalRows: ["rows 1-5", "rows 6-28", "rows 29-33", ""],
    totalLabels: [
      { zone: "ZONE 1" },
      { zone: "ZONE 2" },
      { zone: "ZONE 3" },
      { zone: "TOTAL" },
    ],
    zones: {
      zone1Start: 1,
      zone1End: 5,
      zone2Start: 6,
      zone2End: 28,
      zone3Start: 29,
      zone3End: 33,
    },
    maxPaxPerZone: {
      zone1: 27,
      zone2: 132,
      zone3: 30,
    },
  },
  {
    name: "Boeing 737-700",
    type: "boeing-737-700",
    seq: 148,
    rows: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26,
    ],
    evacuationRow: [
      "1A",
      "1B",
      "1C",
      "1D",
      "1E",
      "1F",
      "2A",
      "2B",
      "2C",
      "2D",
      "2E",
      "2F",
      "11A",
      "11B",
      "11C",
      "11D",
      "11E",
      "11F",
      "12B",
      "12C",
      "12D",
      "12E",
      "14A",
      "14B",
      "14C",
      "14D",
      "14E",
      "14F",
    ],
    evacuationRowColored: [
      "1A",
      "1B",
      "1C",
      "1D",
      "1E",
      "1F",
      "12B",
      "12C",
      "12D",
      "12E",
    ],
    notExistingSeats: ["12A", "12F", "13A", "13B", "13C", "13D", "13E", "13F"],
    notExisitingRows: 13,
    totalRows: ["rows 1-4", "rows 5-21", "rows 22-26", ""],
    totalLabels: [
      { zone: "ZONE 1" },
      { zone: "ZONE 2" },
      { zone: "ZONE 3" },
      { zone: "TOTAL" },
    ],
    zones: {
      zone1Start: 1,
      zone1End: 4,
      zone2Start: 5,
      zone2End: 21,
      zone3Start: 22,
      zone3End: 26,
    },
    maxPaxPerZone: {
      zone1: 24,
      zone2: 94,
      zone3: 30,
    },
  },
  {
    name: "Boeing 737-8200",
    type: "boeing-737-8200",
    seq: 197,
    rows: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    ],
    evacuationRow: [
      "1B",
      "1C",
      "2A",
      "2B",
      "2C",
      "3A",
      "16A",
      "16B",
      "16C",
      "16D",
      "16E",
      "16F",
      "17A",
      "17B",
      "17C",
      "17D",
      "17E",
      "17F",
      "18A",
      "18B",
      "18C",
      "18D",
      "18E",
      "18F",
      "19A",
      "19B",
      "19C",
      "19D",
      "19E",
      "19F",
      "27A",
      "27B",
      "27C",
      "27D",
      "27E",
      "28B",
      "28C",
      "28D",
      "28E",
      "29A",
      "29B",
      "29C",
      "29D",
      "29E",
      "29F",
      "30A",
      "30B",
      "30C",
      "30D",
      "30E",
      "30F",
    ],
    evacuationRowColored: [
      "1B",
      "1C",
      "2A",
      "2B",
      "2C",
      "17A",
      "17B",
      "17C",
      "17D",
      "17E",
      "17F",
      "18A",
      "18B",
      "18C",
      "18D",
      "18E",
      "18F",
      "28B",
      "28C",
      "28D",
      "28E",
      "29A",
      "29F",
    ],
    notExistingSeats: [
      "1A",
      "1D",
      "1E",
      "1F",
      "13A",
      "13B",
      "13C",
      "13D",
      "13E",
      "13F",
      "27F",
      "28A",
      "28F",
    ],
    notExisitingRows: 13,
    totalRows: ["rows 1-6", "rows 7-29", "rows 30-35", ""],
    totalLabels: [
      { zone: "ZONE 1" },
      { zone: "ZONE 2" },
      { zone: "ZONE 3" },
      { zone: "TOTAL" },
    ],
    zones: {
      zone1Start: 1,
      zone1End: 6,
      zone2Start: 7,
      zone2End: 29,
      zone3Start: 30,
      zone3End: 35,
    },
    maxPaxPerZone: {
      zone1: 32,
      zone2: 129,
      zone3: 36,
    },
  },
  {
    name: "Airbus A320",
    type: "airbus-a320",
    seq: 180,
    rows: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    evacuationRow: [
      "11A",
      "11B",
      "11C",
      "11D",
      "11E",
      "11F",
      "12A",
      "12B",
      "12C",
      "12D",
      "12E",
      "12F",
      "13A",
      "13B",
      "13C",
      "13D",
      "13E",
      "13F",
      "14A",
      "14B",
      "14C",
      "14D",
      "14E",
      "14F",
    ],
    evacuationRowColored: [
      "12A",
      "12B",
      "12C",
      "12D",
      "12E",
      "12F",
      "13A",
      "13B",
      "13C",
      "13D",
      "13E",
      "13F",
    ],
    notExistingSeats: [],
    notExisitingRows: 0,
    totalRows: ["rows 1-10", "rows 11-20", "rows 21-30", ""],
    totalLabels: [
      { zone: "ZONE 1" },
      { zone: "ZONE 2" },
      { zone: "ZONE 3" },
      { zone: "TOTAL" },
    ],
    zones: {
      zone1Start: 1,
      zone1End: 10,
      zone2Start: 11,
      zone2End: 20,
      zone3Start: 21,
      zone3End: 30,
    },
    maxPaxPerZone: {
      zone1: 60,
      zone2: 60,
      zone3: 60,
    },
  },
] as const satisfies Plane[];

export const DEFAULT_PLANE = PLANES.find(
  (plane) => plane.type === "boeing-737-800"
)!;
