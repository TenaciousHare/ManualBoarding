import { MAX_CHD, MAX_INF } from "../../../constants";
import { SeatAndPlane, SeatValue, PaxType } from "../generateSeatMap";

export function addPaxTypesInfo({
  seatMap,
  plane,
}: SeatAndPlane): SeatAndPlane {
  let childCounter = 0;
  let infantCounter = 0;
  let paxType: PaxType = "A";

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

  return { seatMap, plane };
}

function randomPaxType(
  seat: SeatValue,
  childCounter: number,
  infantCounter: number
): [PaxType, number, number] {
  let paxType: PaxType = "A";
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
