import { SeatAndPlane } from "../generateSeatMap";

export function removeNonExistingSeats({
  seatMap,
  plane,
}: SeatAndPlane): SeatAndPlane {
  const { notExisitingRows, notExistingSeats } = plane;
  if (notExistingSeats.length !== 0) {
    notExistingSeats.forEach((seatToRemove) => {
      let index = seatMap.findIndex((obj) => obj.seat === seatToRemove);
      if (index !== -1) {
        let row = parseInt(seatMap[index].seat.slice(0, -1));
        if (row === notExisitingRows) {
          seatMap.splice(index, 1);
        } else {
          seatMap[index].seat = "";
          seatMap[index].paxType = "A";
          seatMap[index].seatType = "";
        }
      }
    });
  }

  return { seatMap, plane };
}
