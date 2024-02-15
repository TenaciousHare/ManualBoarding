import styles from "./Totals.module.css";
import { TOTAL_HEADERS } from "../../constants";
import { Zones } from "../../hooks/useCountZones/useCountZones";

export interface TotalsProps {
  plane: {
    totalRows: string[];
    totalLabels: { zone: string }[];
  };
  totals: Zones;
}

export const Totals = ({
  plane: { totalRows, totalLabels },
  totals,
}: TotalsProps) => {
  const emptyCell =
    totals.zone4.adults === 0 &&
    totals.zone4.children === 0 &&
    totals.zone4.infants === 0;
  const cell = styles.cell;
  const labelCell = `${styles.label} ${styles.cell}`;
  const labelLong = `${styles.label} ${styles.long}`;
  const labelLongCell = `${styles.label} ${styles.long} ${styles.cell}`;
  const finalTotalCell = `${styles.finalTotal} ${styles.cell}`;
  return (
    <table data-testid="totals" className={styles.totals}>
      <thead>
        <tr>
          {TOTAL_HEADERS.map((header, index) => (
            <th
              role="columnheader"
              key={index}
              className={header === "" ? "" : labelCell}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {totalLabels.map((label, index) => {
          const zoneKey = `zone${index + 1}`;

          return (
            <tr key={label.zone}>
              <td className={index < 3 ? labelLong : ""}>{totalRows[index]}</td>
              <td className={labelLongCell}>{label.zone}</td>
              <td className={cell}>
                {totals[zoneKey]?.adults && !emptyCell
                  ? totals[zoneKey].adults
                  : ""}
              </td>
              <td className={cell}>
                {totals[zoneKey]?.children !== undefined && !emptyCell
                  ? totals[zoneKey].children
                  : ""}
              </td>
              <td className={index === 3 ? finalTotalCell : cell}>
                {totals[zoneKey]?.adults !== undefined &&
                totals[zoneKey]?.children !== undefined &&
                !emptyCell
                  ? (
                      totals[zoneKey]?.adults + totals[zoneKey]?.children
                    ).toString()
                  : ""}
              </td>
              <td className={index === 3 ? finalTotalCell : cell}>
                {totals[zoneKey].infants !== undefined && !emptyCell
                  ? totals[zoneKey].infants
                  : ""}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
