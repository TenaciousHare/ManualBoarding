import { WINDOW_SEATS } from "../constants";

export function generateRandomManualSeatMap(array) {
  let randomManualSeatMap = [];
  let infantCounter = 0;
  let childCounter = 0;

  for (let i = 0; i < array.length; i++) {
    let category = "A";
    [infantCounter, category] = randomCategoryI(i, infantCounter);
    if (category === "A" && i % 2 === 0) {
      [childCounter, category] = randomCategoryC(i, childCounter);
    }
    let seat = {
      value: randomValue(array[i]),
      category: category,
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

function randomCategoryC(index, childCounter) {
  const isNotEvacuationSeat =
    !(index >= 0 && index <= 8) && !(index >= 78 && index <= 101);
  let category = "A";
  let randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 1 && childCounter <= 50 && isNotEvacuationSeat) {
    childCounter = childCounter + 1;
    category = "C";
  }
  return [childCounter, category];
}

function randomCategoryI(index, infantCounter) {
  const isNotEvacuationSeat =
    !(index >= 0 && index <= 8) && !(index >= 78 && index <= 101);
  const isWindowSeat = WINDOW_SEATS.includes(index);
  let category = "A";
  let randomNumber = Math.floor(Math.random() * 2);
  if (
    randomNumber === 0 &&
    infantCounter < 18 &&
    isNotEvacuationSeat &&
    isWindowSeat
  ) {
    infantCounter = infantCounter + 1;
    category = "I";
  }
  return [infantCounter, category];
}

// function randomCategory(index, infantCounter, childCounter) {
//   const isNotEvacuationSeat =
//     !(index >= 0 && index <= 8) && !(index >= 78 && index <= 101);
//   const isWindowSeat = WINDOW_SEATS.includes(index);
//   let category = "A";
//   let randomNumber = Math.floor(Math.random() * 2);
//   if (
//     randomNumber === 0 &&
//     infantCounter < 18 &&
//     isNotEvacuationSeat &&
//     isWindowSeat
//   ) {
//     infantCounter = infantCounter + 1;
//     category = "I";
//   } else if (randomNumber === 1 && childCounter <= 50 && isNotEvacuationSeat) {
//     childCounter = childCounter + 1;
//     category = "C";
//   } else {
//     category = "A";
//   }

//   return [infantCounter, childCounter, category];
// }
