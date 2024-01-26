import React from "react";
import { Seat } from "./Seat";
import { Gap } from "./Gap";
import { SEATS } from "../constants/SEATS";

export const Row = ({ row }) => {
  return (
    <tr>
      <td className="row-number">{row}</td>
      {SEATS.map((seat) => (
        <React.Fragment key={seat}>
          <Seat row={row} seat={seat} />
          {seat === "C" && <Gap />}
        </React.Fragment>
      ))}
      <td className="row-number">{row}</td>
    </tr>
  );
};
