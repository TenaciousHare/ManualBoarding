import { TOTAL_HEADERS, TOTAL_LABELS } from "../constants";
export const Totals = ({ plane: { totalRows }, totals }) => {
  const emptyCell =
    totals[3].adults === 0 &&
    totals[3].children === 0 &&
    totals[3].infants === 0;
  return (
    <table className="totals">
      <thead>
        <tr>
          {TOTAL_HEADERS.map((header, index) => (
            <th key={index} className={header === "" ? "" : "label cell"}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TOTAL_LABELS.map((label, index) => (
          <tr key={label.zone}>
            <td className={index < 3 ? "label long" : ""}>
              {totalRows[index]}
            </td>
            <td className="label long cell">{label.zone}</td>
            <td className="cell">
              {totals[index].adults !== undefined && !emptyCell
                ? totals[index].adults
                : ""}
            </td>
            <td className="cell">
              {totals[index].children !== undefined && !emptyCell
                ? totals[index].children
                : ""}
            </td>
            <td className={index === 3 ? "cell final_total" : "cell"}>
              {totals[index].adults !== undefined &&
              totals[index].children !== undefined &&
              !emptyCell
                ? totals[index].adults + totals[index].children
                : ""}
            </td>
            <td className={index === 3 ? "cell final_total" : "cell"}>
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
