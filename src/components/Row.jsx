import React from "react";
import { Seat } from "./Seat";
import { Gap } from "./Gap";
import { SEATS } from "../constants";

export const Row = ({ row, index, seatsValues }) => {
  const rowIndex = index * 6;
  console.log(seatsValues);
  return (
    <tr>
      <td className="row-number">{row}</td>
      {SEATS.map((seat, seatIndex) => (
        <React.Fragment key={seat}>
          <Seat
            id={rowIndex + seatIndex}
            row={row}
            seat={seat}
            seatValue={seatsValues[rowIndex + seatIndex]}
          />
          {seat === "C" && <Gap />}
        </React.Fragment>
      ))}
      <td className="row-number">{row}</td>
    </tr>
  );
};
