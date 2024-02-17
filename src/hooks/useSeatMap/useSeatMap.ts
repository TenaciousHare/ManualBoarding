import { useState } from "react";
import { Plane } from "../../constants";
import { removeNonExistingSeats } from "./removeNonExistingSeats";
import { addValuesToSeats } from "./addValuesToSeats";
import { clearValuesOfAllSeats } from "./clearValuesOfAllSeats";
import { addEvacuationRowsInfo } from "./addEvacuationRowsInfo";
import { addPaxTypesInfo } from "./addPaxTypesInfo";
import { compose } from "./compose";
import { createSeatMap } from "./createSeatMap";

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

export function useSeatMap(
  plane: Plane
): [SeatValue[], () => void, () => void] {
  const [seatValues, setSeatValues] = useState<SeatValue[]>(() =>
    getClearSeatMap()
  );

  function getRandomSeatMap(): SeatValue[] {
    const initialSeatMap: SeatValue[] = createSeatMap(plane);
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

  function getClearSeatMap(): SeatValue[] {
    const initialSeatMap: SeatValue[] = createSeatMap(plane);
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

  function setRandomSeatMap(): void {
    const seatMap = getRandomSeatMap();
    setSeatValues([...seatMap]);
  }

  function setClearSeatMap(): void {
    const seatMap = getClearSeatMap();
    setSeatValues([...seatMap]);
  }

  return [seatValues, setRandomSeatMap, setClearSeatMap];
}
