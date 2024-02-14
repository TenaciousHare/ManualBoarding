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
      for (let i = 0; i < seatMap.length; i++) {
        if (seatMap[i].value !== "" && seatMap[i].seat !== "") {
          newTotals.zone4 = countZone(seatMap[i].paxType, newTotals.zone4);
          let row = parseInt(seatMap[i].seat.slice(0, -1));
          if (row >= plane.zones.zone1Start && row <= plane.zones.zone1End) {
            newTotals.zone1 = countZone(seatMap[i].paxType, newTotals.zone1);
          } else if (
            row >= plane.zones.zone2Start &&
            row <= plane.zones.zone2End
          ) {
            newTotals.zone2 = countZone(seatMap[i].paxType, newTotals.zone2);
          } else if (
            row >= plane.zones.zone3Start &&
            row <= plane.zones.zone3End
          ) {
            newTotals.zone3 = countZone(seatMap[i].paxType, newTotals.zone3);
          }
        } else {
          continue;
        }
      }
      setTotals({ ...newTotals });
    }
  }

  const countZone = (paxType: "A" | "C" | "I", zone: Zone): Zone => {
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

  return [totals, countZones];
};
