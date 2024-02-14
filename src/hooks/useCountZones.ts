import { useState } from "react";
import { SeatValue } from "./useSeatMap";
import { Plane } from "../constants";
export interface Zone {
  adults: number;
  children: number;
  infants: number;
}
export interface Zones {
  [key: string]: Zone;
}

export const useCountZones = (): [
  Zones,
  (plane: Plane, seatMap: SeatValue[], clear?: boolean) => void
] => {
  const initialTotals: Zones = {
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
  const [totals, setTotals] = useState<Zones>({ ...initialTotals });

  function countZones(
    plane: Plane,
    seatMap: SeatValue[],
    clear: boolean = false
  ): void {
    if (clear === true) {
      setTotals({
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
      });
    } else if (clear === false) {
      const newTotals = { ...initialTotals };

      seatMap.forEach((seat) => {
        if (seat.value !== "" && seat.seat !== "") {
          newTotals.zone4 = countZone(seat.paxType, newTotals.zone4);
          let row = parseInt(seat.seat.slice(0, -1));
          if (row >= plane.zones.zone1Start && row <= plane.zones.zone1End) {
            newTotals.zone1 = countZone(seat.paxType, newTotals.zone1);
          } else if (
            row >= plane.zones.zone2Start &&
            row <= plane.zones.zone2End
          ) {
            newTotals.zone2 = countZone(seat.paxType, newTotals.zone2);
          } else if (
            row >= plane.zones.zone3Start &&
            row <= plane.zones.zone3End
          ) {
            newTotals.zone3 = countZone(seat.paxType, newTotals.zone3);
          }
        } else {
          return;
        }
      });

      setTotals({ ...newTotals });
    }
  }

  const countZone = (paxType: "A" | "C" | "I", zone: Zone): Zone => {
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

  return [totals, countZones];
};
