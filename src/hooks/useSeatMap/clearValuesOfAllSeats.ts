import { SeatAndPlane } from "./useSeatMap";

export function clearValuesOfAllSeats({
  seatMap,
  plane,
}: SeatAndPlane): SeatAndPlane {
  seatMap.forEach((seat) => {
    seat.value = "";
  });
  return { seatMap, plane };
}
