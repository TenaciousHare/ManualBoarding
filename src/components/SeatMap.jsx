import React from "react";
import { SEATS } from "../constants";
import { Gap } from "./Gap";
import { Row } from "./Row";

export const SeatMap = ({ seatsValues, plane }) => {
  const ROWS = plane.rows;
  const GAP1 = plane.zones.zone1End;
  const GAP2 = plane.zones.zone2End;
  return (
    <table className="seat-map">
      <thead>
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
      </thead>
      <tbody>
        {ROWS.map((row, index) => (
          <React.Fragment key={row}>
            <Row row={row} index={index} seatsValues={seatsValues} />
            {(row === GAP1 || row === GAP2) && (
              <tr>
                <Gap />
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
