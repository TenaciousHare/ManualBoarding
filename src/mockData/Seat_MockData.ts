import { SeatValue } from "../store/generateSeatMap/generateSeatMap";

const defaultSeatValue: SeatValue = {
  value: "64",
  seat: "10A",
  seatType: "window",
  paxType: "C",
  evacuationRow: false,
  evacuationRowColored: false,
};
export const defaultProps = {
  id: 1,
  seatValue: defaultSeatValue,
};

const crossedSeatValue: SeatValue = {
  value: "X",
  seat: "10A",
  seatType: "window",
  paxType: "A",
  evacuationRow: false,
  evacuationRowColored: false,
};

export const crossedProps = {
  id: 5,
  seatValue: crossedSeatValue,
};

const emergencySeatValue: SeatValue = {
  value: "53",
  seat: "16A",
  seatType: "window",
  paxType: "A",
  evacuationRow: true,
  evacuationRowColored: true,
};

export const emergencyProps = {
  id: 5,
  seatValue: emergencySeatValue,
};

const emptySeatValue: SeatValue = {
  value: "",
  seat: "",
  seatType: "",
  paxType: "A",
  evacuationRow: false,
  evacuationRowColored: false,
};

export const emptyProps = {
  id: 0,
  seatValue: emptySeatValue,
};

const infantSeatValue: SeatValue = {
  value: "X",
  seat: "12A",
  seatType: "window",
  paxType: "I",
  evacuationRow: false,
  evacuationRowColored: false,
};

export const infantProps = {
  id: 12,
  seatValue: infantSeatValue,
};
