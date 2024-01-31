import React from "react";
import { ROWS, SEATS } from "../constants";
import { Gap } from "./Gap";
import { Row } from "./Row";

export const SeatMap = ({ seatsValues }) => {
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
            {(row === 5 || row === 28) && (
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
