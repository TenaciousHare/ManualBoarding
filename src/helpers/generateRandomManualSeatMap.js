import { WINDOW_SEATS } from "../constants";

export function generateRandomManualSeatMap(array) {
  let randomManualSeatMap = [];

  for (let i = 0; i < array.length; i++) {
    let seat = {
      value: randomValue(array[i]),
      category: randomCategory(i),
    };
    randomManualSeatMap.push(seat);
  }
  return randomManualSeatMap;
}

function randomValue(sequence) {
  let losowaLiczba = Math.floor(Math.random() * 3);

  if (losowaLiczba === 0) {
    return sequence;
  } else if (losowaLiczba === 1) {
    return "X";
  } else {
    return "";
  }
}

function randomCategory(index) {
  const isNotEvacuationSeat =
    !(index >= 0 && index <= 8) && !(index >= 78 && index <= 101);
  const isWindowSeat = WINDOW_SEATS.includes(index);
  let infantCounter = 0;
  let childCounter = 0;
  let randomNumber = Math.floor(Math.random() * 2);
  if (
    randomNumber === 0 &&
    infantCounter < 18 &&
    isNotEvacuationSeat &&
    isWindowSeat
  ) {
    infantCounter++;
    return "I";
  } else if (randomNumber === 1 && childCounter < 30 && isNotEvacuationSeat) {
    childCounter++;
    return "C";
  }
  return "A";
}
