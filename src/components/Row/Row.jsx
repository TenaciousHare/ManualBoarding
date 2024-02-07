import React from "react";
import styles from "./Row.module.css";
import { Seat } from "../Seat/Seat";
import { Gap } from "../Gap/Gap";
import { SEATS } from "../../constants";

export const Row = ({ row, index, seatsValues }) => {
  const rowIndex = index * 6;
  return (
    <tr>
      <td className={styles.rowNumber}>{row}</td>
      {SEATS.map((seat, seatIndex) => (
        <React.Fragment key={seat}>
          <Seat
            id={rowIndex + seatIndex}
            row={row}
            seatValue={seatsValues[rowIndex + seatIndex]}
          />
          {seat === "C" && <Gap />}
        </React.Fragment>
      ))}
      <td className={styles.rowNumber}>{row}</td>
    </tr>
  );
};
