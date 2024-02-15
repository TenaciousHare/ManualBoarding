import { shuffleArray } from "./shuffleArray";
import { generateSeqNumbersArray } from "./generateSeqNumbersArray";
import { Plane } from "../../constants";
import { SeatAndPlane, SeatValue } from "./useSeatMap";

export function addValuesToSeats({
  seatMap,
  plane,
}: {
  seatMap: SeatValue[];
  plane: Plane;
}): SeatAndPlane {
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

  return { seatMap, plane };
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
