import { Plane } from "../../constants";
import { SeatValue } from "../../hooks/useSeatMap/useSeatMap";

// Przykładowy obiekt plane
export const plane: Plane = {
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
export const seatMap: SeatValue[] = [
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
