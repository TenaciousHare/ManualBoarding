import { useState } from "react";
import { Plane, SeatValue } from "../types/interfaces";
import { generateSeqNumbersArray } from "../helpers/generateSeqNumbersArray";
import { shuffleArray } from "../helpers/shuffleArray";
import { getSeatType } from "../helpers/getSeatType";

export function useSeatMap(
  plane: Plane
): [SeatValue[], (plane: Plane, clear?: boolean) => void] {
  const [seatValues, setSeatValues] = useState<SeatValue[]>([]);

  const MAX_INF = 18;
  const MAX_CHD = 40;

  // funkcja, która tworzy tablicę miejsc w samolocie
  function createSeatMap(rows: number[]): SeatValue[] {
    let seatMap = [];
    let letters = ["A", "B", "C", "D", "E", "F"];
    let length = plane.type !== "airbus-a320" ? rows.length + 1 : rows.length;
    for (let i = 1; i <= length; i++) {
      for (let j = 0; j < letters.length; j++) {
        const seatType = getSeatType(letters[j]);
        let seatObj = {
          value: "",
          seat: i + letters[j],
          seatType,
          paxType: "",
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
      for (let i = 0; i < seatsToRemove.length; i++) {
        let index = seatMap.findIndex((obj) => obj.seat === seatsToRemove[i]);
        if (index !== -1) {
          let row = parseInt(seatMap[index].seat.slice(0, -1));
          if (row === rowToRemove) {
            seatMap.splice(index, 1);
          } else {
            seatMap[index].seat = "";
            seatMap[index].paxType = "";
            seatMap[index].seatType = "";
          }
        }
      }
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
      for (let i = 0; i < seatMap.length; i++) {
        if (seatMap[i].seat !== "") {
          seatMap[i].value = randomValue(String(sequences[index]));
          index++;
        } else {
          seatMap[i].value = "";
        }
      }
    } else {
      for (let i = 0; i < seatMap.length; i++) {
        seatMap[i].value = "";
      }
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
    for (let i = 0; i < evacuationRow.length; i++) {
      let index = seatMap.findIndex((obj) => obj.seat === evacuationRow[i]);
      if (index !== -1) {
        seatMap[index].evacuationRow = true;
      }
    }
    for (let i = 0; i < evacuationRowColored.length; i++) {
      let index = seatMap.findIndex(
        (obj) => obj.seat === evacuationRowColored[i]
      );
      if (index !== -1) {
        seatMap[index].evacuationRowColored = true;
      }
    }

    return seatMap;
  }

  function addPaxTypesInfo(seatMap: SeatValue[]): SeatValue[] {
    let childCounter = 0;
    let infantCounter = 0;
    let paxType = "A";
    for (let i = 0; i < seatMap.length; i++) {
      if (seatMap[i].seat !== "") {
        [paxType, childCounter, infantCounter] = randomPaxType(
          seatMap[i],
          childCounter,
          infantCounter
        );
        seatMap[i].paxType = paxType;
      } else {
        seatMap[i].paxType = "";
      }
    }
    return seatMap;
  }

  function randomPaxType(
    seat: SeatValue,
    childCounter: number,
    infantCounter: number
  ): [string, number, number] {
    let paxType = "A";
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
    } else if (random === 2) {
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
