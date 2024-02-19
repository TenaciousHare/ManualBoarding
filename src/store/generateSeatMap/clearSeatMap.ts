import { Plane } from "../../constants";
import { addEvacuationRowsInfo } from "./helpers/addEvacuationRowsInfo";
import { clearValuesOfAllSeats } from "./helpers/clearValuesOfAllSeats";
import { compose } from "./helpers/compose";
import { createInitialSeatMap } from "./helpers/createInitialSeatMap";
import { SeatValue } from "./generateSeatMap";
import { removeNonExistingSeats } from "./helpers/removeNonExistingSeats";

export function clearSeatMap(plane: Plane): SeatValue[] {
  const initialSeatMap: SeatValue[] = createInitialSeatMap(plane);
  const initialObject = {
    seatMap: initialSeatMap,
    plane,
  };
  const { seatMap } = compose(
    addEvacuationRowsInfo,
    clearValuesOfAllSeats,
    removeNonExistingSeats
  )(initialObject);

  return seatMap;
}
