import React from "react";
import styles from "./SeatMap.module.css";
import { SEATS } from "../../constants";
import { SeatValue } from "../../hooks/useSeatMap";
import { Gap } from "../Gap/Gap";
import { Row } from "../Row/Row";

interface SeatMapProps {
  seatsValues: SeatValue[];
  plane: {
    rows: number[];
    zones: {
      zone1End: number;
      zone2End: number;
    };
  };
}

export const SeatMap = ({ seatsValues, plane }: SeatMapProps) => {
  const ROWS = plane.rows;
  const GAP1 = plane.zones.zone1End;
  const GAP2 = plane.zones.zone2End;
  return (
    <table data-testid="seat-map" className={styles.seatMap}>
      <thead>
        <tr>
          <th></th>
          {SEATS.map((seat) => (
            <React.Fragment key={seat}>
              <th className={styles.columnLabel}>{seat}</th>
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
