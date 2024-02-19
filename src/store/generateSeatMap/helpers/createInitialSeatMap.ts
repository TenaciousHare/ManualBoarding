import { Plane } from "../../../constants";
import { getSeatType } from "./getSeatType";
import { PaxType, SeatValue } from "../generateSeatMap";

export function createInitialSeatMap(plane: Plane): SeatValue[] {
  const rows: number[] = plane.rows;
  let letters = ["A", "B", "C", "D", "E", "F"];
  let length = plane.type !== "airbus-a320" ? rows.length + 1 : rows.length;
  let paxType: PaxType = "A";

  const seatMap: SeatValue[] = Array.from({ length }, (_, i) => {
    return letters.map((letter) => ({
      value: "",
      seat: `${i + 1}${letter}`,
      seatType: getSeatType(letter),
      paxType: paxType,
      evacuationRow: false,
      evacuationRowColored: false,
    }));
  }).flat();

  return seatMap;
}
