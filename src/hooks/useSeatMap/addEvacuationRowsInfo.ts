import { SeatAndPlane } from "./useSeatMap";

export function addEvacuationRowsInfo({
  seatMap,
  plane,
}: SeatAndPlane): SeatAndPlane {
  const { evacuationRow, evacuationRowColored } = plane;
  evacuationRow.forEach((evRow) => {
    let index = seatMap.findIndex((obj) => obj.seat === evRow);
    if (index !== -1) {
      seatMap[index].evacuationRow = true;
    }
  });

  evacuationRowColored.forEach((evRowCol) => {
    let index = seatMap.findIndex((obj) => obj.seat === evRowCol);
    if (index !== -1) {
      seatMap[index].evacuationRowColored = true;
    }
  });

  return { seatMap, plane };
}
