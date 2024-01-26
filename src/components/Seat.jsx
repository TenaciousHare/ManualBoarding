export const Seat = ({ row, seat }) => {
  const isEmergency = row === 1 || row === 16 || row === 17;
  const isWindow = seat === "A" || seat === "F";
  const isAisle = seat === "C" || seat === "D";
  const isExisting =
    row === 1 && (seat === "D" || seat === "E" || seat === "F");

  let className = "seat";
  if (isEmergency) {
    className += " emergency";
  }
  if (isWindow) {
    className += " window";
  }
  if (isAisle) {
    className += " aisle";
  }
  if (isExisting) {
    className = "empty";
  }

  return (
    <td className={className}>
      {row}
      {seat}
    </td>
  );
};
