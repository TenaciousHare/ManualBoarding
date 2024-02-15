import { useState } from "react";
import { Plane } from "../../constants";
import { getSeatType } from "./getSeatType";
import { removeNonExistingSeats } from "./removeNonExistingSeats";
import { addValuesToSeats } from "./addValuesToSeats";
import { clearValuesOfAllSeats } from "./clearValuesOfAllSeats";
import { addEvacuationRowsInfo } from "./addEvacuationRowsInfo";
import { addPaxTypesInfo } from "./addPaxTypesInfo";
import { compose } from "./compose";

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

  // funkcja, która tworzy tablicę miejsc w samolocie
  function createSeatMap(rows: number[]): SeatValue[] {
    let letters = ["A", "B", "C", "D", "E", "F"];
    let length = plane.type !== "airbus-a320" ? rows.length + 1 : rows.length;
    let paxType: SeatValue["paxType"] = "A";

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

  function getRandomSeatMap(): SeatValue[] {
    const initialSeatMap: SeatValue[] = createSeatMap(plane.rows);
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
    const initialSeatMap: SeatValue[] = createSeatMap(plane.rows);
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
