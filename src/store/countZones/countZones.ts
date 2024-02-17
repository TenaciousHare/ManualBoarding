import { Plane } from "../../constants";
import { PaxType, SeatValue } from "../../hooks/useSeatMap/useSeatMap";

export interface Zone {
  adults: number;
  children: number;
  infants: number;
}
export interface Zones {
  [key: string]: Zone;
}

export const initialTotals: Zones = {
  zone1: {
    adults: 0,
    children: 0,
    infants: 0,
  },
  zone2: {
    adults: 0,
    children: 0,
    infants: 0,
  },
  zone3: {
    adults: 0,
    children: 0,
    infants: 0,
  },
  zone4: {
    adults: 0,
    children: 0,
    infants: 0,
  },
};

export function countZones(plane: Plane, seatMap: SeatValue[]): Zones {
  const newTotals = { ...initialTotals };

  seatMap.forEach((seat) => {
    if (seat.value !== "" && seat.seat !== "") {
      newTotals.zone4 = countZone(seat.paxType, newTotals.zone4);
      let row = parseInt(seat.seat.slice(0, -1));
      if (row >= plane.zones.zone1Start && row <= plane.zones.zone1End) {
        newTotals.zone1 = countZone(seat.paxType, newTotals.zone1);
      } else if (row >= plane.zones.zone2Start && row <= plane.zones.zone2End) {
        newTotals.zone2 = countZone(seat.paxType, newTotals.zone2);
      } else if (row >= plane.zones.zone3Start && row <= plane.zones.zone3End) {
        newTotals.zone3 = countZone(seat.paxType, newTotals.zone3);
      }
    } else {
      return;
    }
  });

  return { ...newTotals };
}

export const countZone = (paxType: PaxType, zone: Zone): Zone => {
  const countedZone = { ...zone };
  switch (paxType) {
    case "A":
      countedZone.adults += 1;
      break;
    case "C":
      countedZone.children += 1;
      break;
    case "I":
      countedZone.adults += 1;
      countedZone.infants += 1;
      break;
  }
  return countedZone;
};
