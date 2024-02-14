import React from "react";
import styles from "./Row.module.css";
import { Seat } from "../Seat/Seat";
import { Gap } from "../Gap/Gap";
import { SEATS } from "../../constants";
import { SeatValue } from "../../hooks/useSeatMap";

export interface RowProps {
  row: number;
  index: number;
  seatsValues: SeatValue[];
}

export const Row = ({ row, index, seatsValues }: RowProps) => {
  const rowIndex = index * 6;

  return (
    <tr>
      <td data-testid={row} className={styles.rowNumber}>
        {row}
      </td>
      {SEATS.map((seat, seatIndex) => (
        <React.Fragment key={seat}>
          <Seat
            id={rowIndex + seatIndex}
            seatValue={seatsValues[rowIndex + seatIndex]}
          />
          {seat === "C" && <Gap />}
        </React.Fragment>
      ))}
      <td data-testid={row} className={styles.rowNumber}>
        {row}
      </td>
    </tr>
  );
};
