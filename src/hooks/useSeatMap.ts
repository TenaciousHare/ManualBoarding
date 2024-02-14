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
    let seatMap = [];
    let letters = ["A", "B", "C", "D", "E", "F"];
    let length = plane.type !== "airbus-a320" ? rows.length + 1 : rows.length;

    for (let i = 1; i <= length; i++) {
      for (let j = 0; j < letters.length; j++) {
        const seatType = getSeatType(letters[j]);
        let seatObj: SeatValue = {
          value: "",
          seat: i + letters[j],
          seatType,
          paxType: "A",
          evacuationRow: false,
          evacuationRowColored: false,
        };
        seatMap.push(seatObj);
      }
    }

    return seatMap;
  }

  // funkcja, która usuwa nieistniejące miejsca z tablicy miejsc w samolocie
  function removeNonExistingSeats(
    seatMap: SeatValue[],
    seatsToRemove: string[],
    rowToRemove: number
  ): SeatValue[] {
    if (seatsToRemove.length !== 0) {
      seatsToRemove.forEach((seatToRemove) => {
        let index = seatMap.findIndex((obj) => obj.seat === seatToRemove);
        if (index !== -1) {
          let row = parseInt(seatMap[index].seat.slice(0, -1));
          if (row === rowToRemove) {
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

  const seqArray = generateSeqNumbersArray(plane.seq);

  const shuffledSeqArr: number[] = shuffleArray(seqArray);

  function addValuesToSeats(
    seatMap: SeatValue[],
    sequences: number[],
    clear = false
  ): SeatValue[] {
    let index = 0;
    if (!clear) {
      seatMap.forEach((seat) => {
        if (seat.seat !== "") {
          seat.value = randomValue(String(sequences[index]));
          index++;
        } else {
          seat.value = "";
        }
      });
    } else {
      seatMap.forEach((seat) => {
        seat.value = "";
      });
    }
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

  function addEvacuationRowsInfo(
    seatMap: SeatValue[],
    evacuationRow: string[],
    evacuationRowColored: string[]
  ): SeatValue[] {
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

  function getRandomSeatMap(plane: Plane, clear = false): void {
    if (clear) {
      const clearSeatMap = addEvacuationRowsInfo(
        addValuesToSeats(
          removeNonExistingSeats(
            createSeatMap(plane.rows),
            plane.notExistingSeats,
            plane.notExisitingRows
          ),
          shuffledSeqArr,
          true
        ),
        plane.evacuationRow,
        plane.evacuationRowColored
      );

      setSeatValues([...clearSeatMap]);
    } else {
      const randomSeatMap = addPaxTypesInfo(
        addEvacuationRowsInfo(
          addValuesToSeats(
            removeNonExistingSeats(
              createSeatMap(plane.rows),
              plane.notExistingSeats,
              plane.notExisitingRows
            ),
            shuffledSeqArr
          ),
          plane.evacuationRow,
          plane.evacuationRowColored
        )
      );

      setSeatValues([...randomSeatMap]);
    }
  }

  return [seatValues, getRandomSeatMap];
}
