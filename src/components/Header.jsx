import React from "react";
import { SEATS } from "../constants/SEATS";
export const Header = () => {
  return (
    <tr>
      <th></th>
      {SEATS.map((seat) => (
        <React.Fragment key={seat}>
          <th className="column-label">{seat}</th>
          {seat === "C" && <th></th>}
        </React.Fragment>
      ))}
      <th></th>
    </tr>
  );
};
