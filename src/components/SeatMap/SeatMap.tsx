import React, { useContext } from "react";
import styles from "./SeatMap.module.css";
import { SEATS } from "../../constants";
import { Gap } from "../Gap/Gap";
import { Row } from "../Row/Row";
import { SeatMapContext } from "../../context/SeatMapContext";

export const SeatMap = () => {
  const {
    state: { plane, seatmap },
  } = useContext(SeatMapContext)!;
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
            <Row row={row} index={index} seatsValues={seatmap} />
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
