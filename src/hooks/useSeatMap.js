import { useState } from "react";

export function useSeatMap(plane) {
  const [seatValues, setSeatValues] = useState([]);

  // funkcja, która tworzy tablicę miejsc w samolocie
  function createSeatMap(rows) {
    let seatMap = [];
    let letters = ["A", "B", "C", "D", "E", "F"];
    let length = plane.type !== "airbus-a320" ? rows.length + 1 : rows.length;
    for (let i = 1; i <= length; i++) {
      for (let j = 0; j < letters.length; j++) {
        const seatType = getSeatType(letters[j]);
        let seatObj = {
          seat: i + letters[j],
          seatType,
          value: 0,
          paxType: "",
          evacuationRow: false,
          evacuationRowColored: false,
        };
        seatMap.push(seatObj);
      }
    }

    return seatMap;
  }

  function getSeatType(seat) {
    switch (seat) {
      case "A":
      case "F":
        return "window";
      case "C":
      case "D":
        return "aisle";
      case "B":
      case "E":
        return "mid";
      default:
        return "unknown";
    }
  }

  // funkcja, która usuwa nieistniejące miejsca z tablicy miejsc w samolocie
  function removeNonExistingSeats(seatMap, seatsToRemove, rowToRemove) {
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

  function createArrayOfSeq(seq) {
    const seqArr = [];
    for (let i = 1; i <= seq; i++) {
      seqArr.push(i);
    }
    return seqArr;
  }
  const seqArray = createArrayOfSeq(plane.seq);
  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const shuffledSeqArr = shuffle(seqArray);

  // funkcja, która dodaje do obiektu miejsca losowe numery sekwencyjne z tablicy
  function addValuesToSeats(seatMap, sequences, clear = false) {
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

  function randomValue(sequence) {
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber === 0 || randomNumber === 1) {
      return sequence;
    } else if (randomNumber === 2 || randomNumber === 3) {
      return "X";
    } else if (randomNumber === 4) {
      return "";
    }
  }

  function addEvacuationRowsInfo(seatMap, evacuationRow, evacuationRowColored) {
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

  const MAX_INF = 18;
  const MAX_CHD = 40;

  function addPaxTypesInfo(seatMap) {
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

  function randomPaxType(seat, childCounter, infantCounter) {
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

  function getRandomSeatMap(plane, clear = false) {
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

  // funkcja która zlicza sekcje w samolocie
  const countZones = (seatMap) => {
    let ZONE1 = {
      adults: 0,
      children: 0,
      infants: 0,
    };
    let ZONE2 = {
      adults: 0,
      children: 0,
      infants: 0,
    };
    let ZONE3 = {
      adults: 0,
      children: 0,
      infants: 0,
    };
    let TOTAL = {
      adults: 0,
      children: 0,
      infants: 0,
    };
    for (let i = 0; i < seatMap.length; i++) {
      if (seatMap[i].value !== "" && seatMap[i].seat !== "") {
        TOTAL = countZone(seatMap[i].paxType, TOTAL);
        let row = parseInt(seatMap[i].seat.slice(0, -1));
        if (row >= plane.zones.zone1Start && row <= plane.zones.zone1End) {
          ZONE1 = countZone(seatMap[i].paxType, ZONE1);
        } else if (
          row >= plane.zones.zone2Start &&
          row <= plane.zones.zone2End
        ) {
          ZONE2 = countZone(seatMap[i].paxType, ZONE2);
        } else if (
          row >= plane.zones.zone3Start &&
          row <= plane.zones.zone3End
        ) {
          ZONE3 = countZone(seatMap[i].paxType, ZONE3);
        }
      } else {
        continue;
      }
    }
    const ZONES = [ZONE1, ZONE2, ZONE3, TOTAL];
    return ZONES;
  };

  const countZone = (paxType, zone) => {
    switch (paxType) {
      case "A":
        zone.adults += 1;
        break;
      case "C":
        zone.children += 1;
        break;
      case "I":
        zone.adults += 1;
        zone.infants += 1;
        break;
    }
    return zone;
  };

  return [seatValues, getRandomSeatMap, countZones];
}
