import { useState } from "react";
import { generateSeqNumbersArray } from "../helpers/generateSeqNumbersArray";
import { shuffleArray } from "../helpers/shuffleArray";
import { getSeatType } from "../helpers/getSeatType";
import { MAX_CHD, MAX_INF, Plane } from "../constants";

export interface SeatValue {
  value: string;
  seat: string;
  seatType: string;
  paxType: "A" | "C" | "I";
  evacuationRow: boolean;
  evacuationRowColored: boolean;
}

export function useSeatMap(
  plane: Plane
): [SeatValue[], (plane: Plane, clear?: boolean) => void] {
  const [seatValues, setSeatValues] = useState<SeatValue[]>([]);

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

  // funkcja, która usuwa nieistniejące miejsca z tablicy miejsc w samolocie
  function removeNonExistingSeats(seatMap: SeatValue[]): SeatValue[] {
    const { notExisitingRows, notExistingSeats } = plane;
    if (notExistingSeats.length !== 0) {
      notExistingSeats.forEach((seatToRemove) => {
        let index = seatMap.findIndex((obj) => obj.seat === seatToRemove);
        if (index !== -1) {
          let row = parseInt(seatMap[index].seat.slice(0, -1));
          if (row === notExisitingRows) {
            seatMap.splice(index, 1);
          } else {
            seatMap[index].seat = "";
            seatMap[index].paxType = "A";
            seatMap[index].seatType = "";
          }
        }
      });
    }

    return seatMap;
  }

  function addValuesToSeats(seatMap: SeatValue[]): SeatValue[] {
    const sequences = shuffleArray(generateSeqNumbersArray(plane.seq));
    let index = 0;

    seatMap.forEach((seat) => {
      if (seat.seat !== "") {
        seat.value = randomValue(String(sequences[index]));
        index++;
      } else {
        seat.value = "";
      }
    });

    return seatMap;
  }

  function clearValuesOfAllSeats(seatMap: SeatValue[]): SeatValue[] {
    seatMap.forEach((seat) => {
      seat.value = "";
    });
    return seatMap;
  }

  function randomValue(sequence: string): string {
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber === 0 || randomNumber === 1) {
      return sequence;
    } else if (randomNumber === 2 || randomNumber === 3) {
      return "X";
    } else {
      return "";
    }
  }

  function addEvacuationRowsInfo(seatMap: SeatValue[]): SeatValue[] {
    const { evacuationRow, evacuationRowColored } = plane;
    evacuationRow.forEach((evRow) => {
      let index = seatMap.findIndex((obj) => obj.seat === evRow);
      if (index !== -1) {
        seatMap[index].evacuationRow = true;
      }
    });

    evacuationRowColored.forEach((evRowCol) => {
      let index = seatMap.findIndex((obj) => obj.seat === evRowCol);
      if (index !== -1) {
        seatMap[index].evacuationRowColored = true;
      }
    });

    return seatMap;
  }

  function addPaxTypesInfo(seatMap: SeatValue[]): SeatValue[] {
    let childCounter = 0;
    let infantCounter = 0;
    let paxType: SeatValue["paxType"] = "A";

    seatMap.forEach((seat) => {
      if (seat.seat !== "") {
        [paxType, childCounter, infantCounter] = randomPaxType(
          seat,
          childCounter,
          infantCounter
        );
        seat.paxType = paxType;
      } else {
        seat.paxType = "A";
      }
      return seat;
    });

    return seatMap;
  }

  function randomPaxType(
    seat: SeatValue,
    childCounter: number,
    infantCounter: number
  ): [SeatValue["paxType"], number, number] {
    let paxType: SeatValue["paxType"] = "A";
    let random = Math.floor(Math.random() * 3);
    if (random === 0 && childCounter < MAX_CHD && !seat.evacuationRow) {
      childCounter++;
      paxType = "C";
    } else if (
      random === 1 &&
      infantCounter < MAX_INF &&
      !seat.evacuationRow &&
      seat.seatType === "window"
    ) {
      infantCounter++;
      paxType = "I";
    } else {
      paxType = "A";
    }

    return [paxType, childCounter, infantCounter];
  }

  const compose = <T>(...fns: Array<(arg: T) => T>): ((arg: T) => T) => {
    return (x: T) =>
      fns.reduceRight((acc: T, fn: (arg: T) => T): T => fn(acc), x);
  };

  function getRandomSeatMap(plane: Plane, clear = false): void {
    const initialSeatMap = createSeatMap(plane.rows);
    if (clear) {
      const clearSeatMap = compose(
        addEvacuationRowsInfo,
        clearValuesOfAllSeats,
        removeNonExistingSeats
      )(initialSeatMap);

      setSeatValues([...clearSeatMap]);
    } else {
      const randomSeatMap = compose(
        addPaxTypesInfo,
        addEvacuationRowsInfo,
        addValuesToSeats,
        removeNonExistingSeats
      )(initialSeatMap);

      setSeatValues([...randomSeatMap]);
    }
  }

  return [seatValues, getRandomSeatMap];
}
