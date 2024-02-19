import { SeatMapProps } from "./SeatMap";

export const mockProps: SeatMapProps = {
  seatsValues: [
    {
      value: "189",
      seat: "3C",
      seatType: "window",
      paxType: "A",
      evacuationRow: false,
      evacuationRowColored: false,
    },
  ],
  plane: {
    rows: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    ],
    zones: {
      zone1End: 5,
      zone2End: 28,
    },
  },
};
