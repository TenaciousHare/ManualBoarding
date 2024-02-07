import React from "react";
import styles from "./Totals.module.css";
import { TOTAL_HEADERS } from "../../constants";
import { TotalsProps } from "../../types/interfaces";

export const Totals: React.FC<TotalsProps> = ({
  plane: { totalRows, totalLabels },
  totals,
}) => {
  const emptyCell =
    totals[3].adults === 0 &&
    totals[3].children === 0 &&
    totals[3].infants === 0;
  const cell = styles.cell;
  const labelCell = `${styles.label} ${styles.cell}`;
  const labelLong = `${styles.label} ${styles.long}`;
  const labelLongCell = `${styles.label} ${styles.long} ${styles.cell}`;
  const finalTotalCell = `${styles.finalTotal} ${styles.cell}`;
  return (
    <table className={styles.totals}>
      <thead>
        <tr>
          {TOTAL_HEADERS.map((header, index) => (
            <th key={index} className={header === "" ? "" : labelCell}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {totalLabels.map((label, index) => (
          <tr key={label.zone}>
            <td className={index < 3 ? labelLong : ""}>{totalRows[index]}</td>
            <td className={labelLongCell}>{label.zone}</td>
            <td className={cell}>
              {totals[index].adults !== undefined && !emptyCell
                ? totals[index].adults
                : ""}
            </td>
            <td className={cell}>
              {totals[index].children !== undefined && !emptyCell
                ? totals[index].children
                : ""}
            </td>
            <td className={index === 3 ? finalTotalCell : cell}>
              {totals[index]?.adults !== undefined &&
              totals[index]?.children !== undefined &&
              !emptyCell
                ? (
                    (totals[index]?.adults ?? 0) +
                    (totals[index]?.children ?? 0)
                  ).toString()
                : ""}
            </td>
            <td className={index === 3 ? finalTotalCell : cell}>
              {" "}
              {totals[index].infants !== undefined && !emptyCell
                ? totals[index].infants
                : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
