import { Plane } from "../../constants";
import { removeNonExistingSeats } from "./helpers/removeNonExistingSeats";
import { addValuesToSeats } from "./helpers/addValuesToSeats";
import { addEvacuationRowsInfo } from "./helpers/addEvacuationRowsInfo";
import { addPaxTypesInfo } from "./helpers/addPaxTypesInfo";
import { compose } from "./helpers/compose";
import { createInitialSeatMap } from "./helpers/createInitialSeatMap";

export type PaxType = "A" | "C" | "I";

export interface SeatValue {
  value: string;
  seat: string;
  seatType: string;
  paxType: PaxType;
  evacuationRow: boolean;
  evacuationRowColored: boolean;
}

export interface SeatAndPlane {
  seatMap: SeatValue[];
  plane: Plane;
}

export function generateSeatMap(plane: Plane): SeatValue[] {
  const initialSeatMap: SeatValue[] = createInitialSeatMap(plane);
  const initialObject = {
    seatMap: initialSeatMap,
    plane,
  };
  const { seatMap } = compose(
    addPaxTypesInfo,
    addEvacuationRowsInfo,
    addValuesToSeats,
    removeNonExistingSeats
  )(initialObject);

  return seatMap;
}
