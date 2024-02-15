import { PaxType } from "../../hooks/useSeatMap/useSeatMap";

const paxType: PaxType = "A";

export const mockProps = {
  row: 1,
  index: 0,
  seatsValues: [
    {
      value: "189",
      seat: "3C",
      seatType: "window",
      paxType,
      evacuationRow: false,
      evacuationRowColored: false,
    },
  ],
};
