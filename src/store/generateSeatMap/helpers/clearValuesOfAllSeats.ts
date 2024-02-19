import { SeatAndPlane } from "../generateSeatMap";

export function clearValuesOfAllSeats({
  seatMap,
  plane,
}: SeatAndPlane): SeatAndPlane {
  seatMap.forEach((seat) => {
    seat.value = "";
  });
  return { seatMap, plane };
}
